https.get(URL, (resp) => {
    let data = '';
  
    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });
    const date = new Date();
  
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      const dataJson  = (JSON.parse(data));
  
      const Items = dataJson.map(entry => ({
        id: { S: entry.id},
        cgId: { S: entry.id },
        createdAt: { S: date.toISOString() },
        updatedAt: { S: date.toISOString() },
        currentPrice: { N: entry.current_price.toString() },
        image: { N: entry.image },
        name: { S: entry.name },
        symbol: { S: entry.symbol },
        valueChange24H: { N: entry.price_change_percentage_1h_in_currency.toString() },
        valueChange1D: { N: entry.price_change_percentage_24h_in_currency.toString() },
        valueChange7D: { N: entry.price_change_percentage_7d_in_currency },
        priceHistoryString: {S: JSON.stringify(entry.sparkline_in_7d.price) },
          
      }))
  
      console.log(Items);
    });
  
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });



exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
