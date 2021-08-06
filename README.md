# VirtualCrypto
<p><strong>Introduction:</strong></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">The explosive rise of the cryptocurrency prices has caused a surge in the number of investors over the recent months. However, the following slump after the massive surge has caused many greenhorns to lose a significant sum of cash. Hence, I thought it would be fun to create an application for people to virtually invest without any risk.&nbsp;</span></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">VirtualCrypto is a project aimed to create an enjoyable platform for individuals to virtually invest their money in an attempt to reach the leaderboards.</span></p>

<p><strong>Architecture:</strong></p>
<p><span style="font-weight: 400;">The backend is built using AWS Amplify. Amplify using AWS Cognito for the authentication (Sign In and out). AWS Appsync for the API, S3 for the storage. Using Lambda Function, that runs on cloud, will fetch and update the prices every few minutes from CoinGecko API and fulfil the orders.


<p align="center">
  </p><img src="https://user-images.githubusercontent.com/64765004/128555597-3a0b558f-09f0-49fd-8dad-93128fc74a87.png" width="60%" height="50%">
  <p><span style="font-weight: 400;">Welcome Screen: Signing in with Google as an option</span></p>
  
  <img src="https://user-images.githubusercontent.com/64765004/128555619-d6fb125c-8710-49e7-bafd-f6db44c667fd.png" width="500" height="455">
  <p><span style="font-weight: 400;">HomeScreen: After logging in, you are able to access the tabs</span></p>
  
  <img src="https://user-images.githubusercontent.com/64765004/128555632-8de6ac5e-cf73-4ca3-9641-54d7affb91bc.png" width="256" height="455">
  <p><span style="font-weight: 400;">PortfolioScreen: Showcasing your coins and portfolio balance</span></p>
  
  <img src="https://user-images.githubusercontent.com/64765004/128555632-8de6ac5e-cf73-4ca3-9641-54d7affb91bc.png" width="256" height="455">
  <p><span style="font-weight: 400;">PortfolioScreen: Showcasing your coins and portfolio balance</span></p>
  </p>


  
  
![Archi](https://user-images.githubusercontent.com/64765004/128236895-acbf4e28-1997-476c-847f-8c071664b132.png)


<p><strong>Data Model</strong></p>
  
![Data model](https://user-images.githubusercontent.com/64765004/128237598-91f2e95e-890b-463c-96ea-2c92e2260d67.png)



<p><strong>Languages used:</strong></p>
<p><span style="font-weight: 400;">TypeScript</span></p>
<p><span style="font-weight: 400;">Javascript</span></p>
<p>&nbsp;</p>
<p><strong>Package Imports</strong></p>
<p><span style="font-weight: 400;">&lsquo;React&rsquo;</span></p>
<p><span style="font-weight: 400;">&lsquo;React-native&rsquo;</span></p>
<p><span style="font-weight: 400;">&lsquo;React-native-chart-kit&rsquo;</span></p>
<p><span style="font-weight: 400;">&lsquo; aws-amplify&rsquo;</span></p>
<p><span style="font-weight: 400;">&lsquo;@react-navigation/native&rsquo;</span></p>
<p>&nbsp;</p>
<p><strong>Technologies and languages used:</strong></p>
<p><span style="font-weight: 400;">Expo&nbsp;</span></p>
<p><span style="font-weight: 400;">React Native</span></p>
<p><span style="font-weight: 400;">AWS (Amplify, Appsync, S3 , Lambda, CloudWatch, DynamoDB)</span></p>
<p><span style="font-weight: 400;">GraphQL</span></p>
<p><br /><br /></p>
<table>
<tbody>
<tr>
<td>
<p><span style="font-weight: 400;">Feature</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Functionality</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Log In</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Allows User to log in their credentials and sign-in</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Log Out</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Allows the user to sign out of their app and brings them back to welcome screen</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Sign Up</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Allows User to create a new account using their Google account</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Portfolio</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Allows Users to see their current portfolio balance and the coins they hold</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Market</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Using API from CoinGecko, the app obtains updated prices every Cryptocurrency and show on the market</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Price Data</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Allows Users to tap on the cryptocurrency and view the charts</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Price Changes</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Users can view the changes for 1 hour, 1 day, 7 days</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Buy and Sell Options</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Users will be able to purchase the coin based on their current portfolio balance</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Rankings</span></p>
</td>
<td>
<p><span style="font-weight: 400;">The leaderboards will show the current ranking of the User amongst other users of the application based on their portfolio balance</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Profile</span></p>
</td>
<td>
<p><span style="font-weight: 400;">Users are able to sign out through this page or change their profile picture</span></p>
</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>

  
<p>Application Walkthrough and Screenshots</p>
<p align="center">
  </p><img src="https://user-images.githubusercontent.com/64765004/128239553-ea4d6894-d941-4eeb-a0ce-6410fdd31555.jpg" width="256" height="455">
  <p><span style="font-weight: 400;">Welcome Screen: Signing in with Google as an option</span></p>
  
  <img src="https://user-images.githubusercontent.com/64765004/128491671-f2f01b22-fb48-4862-b8fc-3c42d1f3b5a0.jpg" width="256" height="455">
  <p><span style="font-weight: 400;">HomeScreen: After logging in, you are able to access the tabs</span></p>
  
  <img src="https://user-images.githubusercontent.com/64765004/128491791-e651e614-7155-4001-9d6f-2eaaf5038bfe.jpg" width="256" height="455">
  <p><span style="font-weight: 400;">PortfolioScreen: Showcasing your coins and portfolio balance</span></p>
  </p>

<p float="left">
  <img src="https://user-images.githubusercontent.com/64765004/128493054-73db9e86-d74b-47c1-9886-1708bc9a4f2f.jpg" width="256" height="455" />
  <img src="https://user-images.githubusercontent.com/64765004/128493079-8ca29df2-4db7-4d05-a9e4-9924e7aab698.jpg" width="256" height="455" />
  <img src="https://user-images.githubusercontent.com/64765004/128552285-49b2d0d0-e8c1-43ab-8225-aefff37a8863.jpg" width="256" height="455" />
  <p><span style="font-weight: 400;">MarketScreen: Using webscraping CoinGecko API and obtaining the prices of the coins, clicking on each individual coins navigates to      PriceDataScreen </span></p>
</p>

<p float="left">
  <img src="https://user-images.githubusercontent.com/64765004/128552551-12456123-e85e-4f2b-b07a-8d32bb0fe05d.jpg" width="256" height="455" />
  <img src="https://user-images.githubusercontent.com/64765004/128552558-6539049b-8429-4042-9594-3ecd1b4fee82.jpg" width="256" height="455" />
  <p><span style="font-weight: 400;">PriceData Screen: The price and chart updates every 5 minutes </span></p>
  <p><span style="font-weight: 400;">Using import {LineChat} from &ldquo;react-native-chart-kit&rdquo; and storing the data into the AWS backend</span></p>
</p>

<p float="left">
  <img src="https://user-images.githubusercontent.com/64765004/128552990-a512faa4-52d6-4205-9891-856703d33bff.jpg" width="256" height="455" />
  <img src="https://user-images.githubusercontent.com/64765004/128552999-3e13d4ca-0246-449e-9140-901524459788.jpg" width="256" height="455" />
  <p>TradingScreen: Buying and selling of coins whcih will be reflected in user's portfolio</p>
 </p>


  
