# Crypto
<p><strong>Introduction:</strong></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">The explosive rise of the cryptocurrency prices has caused a surge in the number of investors over the recent months. However, the following slump after the massive surge has caused many greenhorns to lose a significant sum of cash. Hence, I thought it would be fun to create an application for people to virtually invest without any risk.&nbsp;</span></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">VirtualCrypto is a project aimed to create an enjoyable platform for individuals to virtually invest their money in an attempt to reach the leaderboards.</span></p>

<p><strong>Architecture:</strong></p>
<p><span style="font-weight: 400;">The backend is built using AWS Amplify. Amplify using AWS Cognito for the authentication (Sign In and out). AWS Appsync for the API, S3 for the storage. Using Lambda Function, that runs on cloud, will fetch and update the prices every few minutes from CoinGecko API and fulfil the orders.</span></p>![Archi](https://user-images.githubusercontent.com/64765004/128236729-465bd4c1-1729-4e06-b965-063602aea32d.png)

<p><strong>Data Model</strong></p>
