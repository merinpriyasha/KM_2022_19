import streamlit as st

#adding necessary libraries
import streamlit as st
import pandas as pd
import lifetimes
import math
import numpy as np
import xlrd
import datetime
np.random.seed(42)
import altair as alt
import time
import warnings
warnings.filterwarnings("ignore")
from math import sqrt
import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from lifetimes.plotting import plot_frequency_recency_matrix
from lifetimes.plotting import plot_probability_alive_matrix
from lifetimes.plotting import plot_period_transactions
from lifetimes.utils import calibration_and_holdout_data
from lifetimes import ParetoNBDFitter
from lifetimes.plotting import plot_history_alive
from sklearn.metrics import mean_squared_error, r2_score

# Importing necessary libraries
from sqlalchemy import create_engine
import datetime as dt
import pandas as pd
from lifetimes import BetaGeoFitter
from lifetimes import GammaGammaFitter
from sklearn.preprocessing import MinMaxScaler
import seaborn as sns


import plotly.figure_factory as ff
import numpy as np

st.markdown(""" # Customer Lifetime Prediction App 👋


Upload the RFM data and get your customer lifetime prediction on the fly !!! :smile:

	""")


data = st.file_uploader("File Uploader")

st.sidebar.title("Input Features :pencil:")

month = st.sidebar.slider("Select The No. Of Month ", min_value = 1, max_value = 6, step = 1, value = 6)

#profit = st.sidebar.slider("Select the penalizer_coef", min_value = 0.0001, max_value = 0.01, step = 0.0001, value = 0.001)


t_month = month

#profit_m = profit

if data is not None:

	def load_data(data, month = t_month):

		m = t_month

		input_data = pd.read_csv(data)

		input_data = pd.DataFrame(input_data)
		input_data = input_data.set_index('Customer ID')


		# BG/NBD
# This model alone is a very valuable modeling technique that can model how much sales will be made after 1 week.
# We will create 2 variable for 1 week and 1 month
		bgf = BetaGeoFitter(penalizer_coef=0.001)
		bgf.fit(input_data['frequency'],
        		input_data['recency'],
        		input_data['T'])

		input_data["expected_purc_1_week"] = bgf.predict(1,
                                              input_data['frequency'],
                                              input_data['recency'],
                                              input_data['T'])

		input_data["expected_purc_1_month"] = bgf.predict(4,
                                               input_data['frequency'],
                                               input_data['recency'],
                                               input_data['T'])
		#cltv_df.head()
		#st.dataframe(input_data)

		# Gamma Gamma
		# It'll show us expected average profit
		ggf = GammaGammaFitter(penalizer_coef=0.01)
		ggf.fit(input_data['frequency'], input_data['monetary'])

		# Prediction
		input_data_6 = ggf.customer_lifetime_value(bgf,
                                   input_data['frequency'],
                                   input_data['recency'],
                                   input_data['T'],
                                   input_data['monetary'],
                                   time= 6,              # 6 months
                                   freq="W",            # 'W':Weekly
                                   discount_rate=0.01)
		#cltv_6.head()
		input_data_6 = input_data_6.reset_index()
		input_data_6 = input_data_6.sort_values(by="clv", ascending=False) 
		#st.dataframe(input_data)

		final_6 = input_data.merge(input_data_6, on="Customer ID", how="left")
		final_6.sort_values(by="clv", ascending=False).head(10)
		#st.dataframe(final_6)
		#calling the function	

		# CLTV standartization
		
		scaler = MinMaxScaler(feature_range=(0, 1))
		scaler.fit(final_6[["clv"]])
		final_6["scaled_clv"] = scaler.transform(final_6[["clv"]])
		#st.dataframe(final_6.sort_values(by="scaled_clv", ascending=False).head(10)	)

		# In the final We'll rate and segment our customers
		final_6["segment"] = pd.qcut(final_6["scaled_clv"], 4, labels=["D", "C", "B", "A"])
		final_6 = final_6.rename(columns={'clv': 'expected_average_profitclv'})
		st.dataframe(final_6.head())

		download = final_6


		#adding a chart
		st.markdown(""" ### Average Expected Profit Each Segment""")
		e = final_6.groupby(['segment'])['expected_average_profitclv'].mean()
		st.bar_chart(e , use_container_width=True)

		st.markdown(""" ### How often did this customer make a purchase in a given period in each Segment ? (Frequency)""")
		f = final_6.groupby(['segment'])['frequency'].mean()
		st.bar_chart(f , use_container_width=True)

		st.markdown(""" ### How much money did the customer spend in a given period in each Segment ? (Monetary)""")
		m = final_6.groupby(['segment'])['monetary'].mean()
		st.bar_chart(m , use_container_width=True)


		
		#creating a button to download the result

		if st.button("Download"):
			st.write("Successfully Downloaded!!! Please Check Your Default Download Location...:smile:" )
			return download.to_csv("customer_lifetime_prediction_result.csv")



	st.markdown("""

		## Customer Lifetime Prediction Result :bar_chart:

		""")

	load_data(data)

else:
	st.text("Please Upload the CSV File")


		