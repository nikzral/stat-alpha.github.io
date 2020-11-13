var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};





function gj() {
    document.getElementById("choose").style.display = "none";
    var ticker = document.getElementById("inp1").value;
    var urll = "https://www.alphavantage.co/query?function=OVERVIEW&symbol="+ticker+"&apikey=FNM5EBUH6GI4A5OX"
    getJSON(urll,
    function(err, data) {
    if (err !== null) {
        alert('Something went wrong: ' + err);
    } else {
        var symbol = (data.Symbol);
        var assettype = (data.AssetType);
        var name = (data.Name)
        var description = (data.Description);
        var exchange = (data.Exchange);
        var currency = (data.Currency);
        var country = (data.Country);
        var sector = (data.Sector);
        var industry = (data.Industry);
        var employees = (data.FullTimeEmployees);
        var FiscalYearEnd = (data.FiscalYearEnd);
        var LatestQuarter = (data.LatestQuarter);
        var MarketCapitalizationRaw = (data.MarketCapitalization);
        var EBITDA = (data.EBITDA);
        var PEGRatio = (data.PEGRatio);
        var PERatio = (data.PERatio);
        var BookValue = (data.BookValue);
        var DividendPerShare = (data.DividendPerShare);
        var DividendYield = (data.DividendYield);
        var EPS = (data.EPS);
        var RevenuePerShareTTM = (data.RevenuePerShareTTM);
        var ProfitMargin = (data.ProfitMargin);
        var OperatingMarginTTM = (data.OperatingMarginTTM);
        var ReturnOnAssetsTTM = (data.ReturnOnAssetsTTM);
        var ReturnOnEquityTTM = (data.ReturnOnEquityTTM);
        var RevenueTTM = (data.RevenueTTM);
        var ProfitMargin = (data.ProfitMargin);
        var OperatingMarginTTM = (data.OperatingMarginTTM);
        var GrossProfitTTM = (data.GrossProfitTTM);
        var DilutedEPSTTM = (data.DilutedEPSTTM);
        var QuarterlyEarningsGrowthYOY = (data.QuarterlyEarningsGrowthYOY);
        var QuarterlyRevenueGrowthYOY = (data.QuarterlyRevenueGrowthYOY);
        var AnalystTargetPrice = (data.AnalystTargetPrice);
        var TrailingPE = (data.TrailingPE);
        var ForwardPE = (data.ForwardPE);
        var PriceToSalesRatioTTM = (data.PriceToSalesRatioTTM);
        var PriceToBookRatio = (data.PriceToBookRatio);
        var EVToRevenue = (data.EVToRevenue);
        var EVToEBITDA = (data.EVToEBITDA);
        var Beta = (data.Beta);

        var n52WeekHigh = (data["52WeekHigh"]);
        var n52WeekLow = (data["52WeekLow"]);
        var n50DayMovingAverage = (data["50DayMovingAverage"]);
        var n200DayMovingAverage = (data["200DayMovingAverage"]);

        var SharesOutstanding = (data.SharesOutstanding);
        var SharesFloat = (data.SharesFloat);
        var SharesShort = (data.SharesShort);
        var SharesShortPriorMonth = (data.SharesShortPriorMonth);
        var ShortRatio = (data.ShortRatio);
        var ShortPercentOutstanding = (data.ShortPercentOutstanding);
        var ShortPercentFloat = (data.ShortPercentFloat);
        var PercentInsiders = (data.PercentInsiders);
        var PercentInstitutions = (data.PercentInstitutions);
        var ForwardAnnualDividendRate = (data.ForwardAnnualDividendRate);
        var ForwardAnnualDividendYield = (data.ForwardAnnualDividendYield);
        var PayoutRatio = (data.PayoutRatio);
        var DividendDate = (data.DividendDate);
        var ExDividendDate = (data.ExDividendDate);
        var LastSplitFactor = (data.LastSplitFactor);
        var LastSplitDate = (data.LastSplitDate);


     
        
        
        
        if (MarketCapitalizationRaw > 100000) {
            var MarketCapitalization1 = MarketCapitalizationRaw/1000
            var MarketCapitalization1 = MarketCapitalization1.toString().slice(0, -1); 
            var MarketCapitalization = MarketCapitalization1+"K"
        }
        if (MarketCapitalizationRaw > 1000000) {
            var MarketCapitalization1 = MarketCapitalizationRaw/1000000
            var MarketCapitalization1 = MarketCapitalization1.toString().slice(0, -2); 
            var MarketCapitalization = MarketCapitalization1+"M"
        }
        if (MarketCapitalizationRaw > 1000000000) {
            var MarketCapitalization1 = MarketCapitalizationRaw/1000000000
            var MarketCapitalization1 = MarketCapitalization1.toString().slice(0, -3); 
            var MarketCapitalization = MarketCapitalization1+"B"
        }
        else {
            var MarketCapitalizationRaw = MarketCapitalization
        }

        
      

        document.getElementById("bigticker").innerHTML = symbol;
        document.getElementById("bigtype").innerHTML = assettype;
        document.getElementById("bigname").innerHTML = name;
        document.getElementById("bigexchange").innerHTML = exchange;
        document.getElementById("bigcurrency").innerHTML = currency;
        document.getElementById("bigcountry").innerHTML = country;
        document.getElementById("descriptiontext").innerHTML = description;
        document.getElementById("sector").innerHTML = sector;
        document.getElementById("industry").innerHTML = industry;
        document.getElementById("employees").innerHTML = employees;
        document.getElementById("FiscalYearEnd").innerHTML = FiscalYearEnd;
        document.getElementById("LatestQuarter").innerHTML = LatestQuarter;
        document.getElementById("MarketCapitalization").innerHTML = MarketCapitalization;
        document.getElementById("EBITDA").innerHTML = EBITDA;
        document.getElementById("PERatio").innerHTML = PERatio;
        document.getElementById("DividendPerShare").innerHTML = DividendPerShare;
        document.getElementById("BookValue").innerHTML = BookValue;
        document.getElementById("PEGRatio").innerHTML = PEGRatio;
        
        document.getElementById("DividendYield").innerHTML = DividendYield;
        document.getElementById("EPS").innerHTML = EPS;
        document.getElementById("RevenuePerShareTTM").innerHTML = RevenuePerShareTTM;
        document.getElementById("ProfitMargin").innerHTML = ProfitMargin;
        document.getElementById("OperatingMarginTTM").innerHTML = OperatingMarginTTM;
        document.getElementById("ReturnOnAssetsTTM").innerHTML = ReturnOnAssetsTTM;
        document.getElementById("ReturnOnEquityTTM").innerHTML = ReturnOnEquityTTM;
        document.getElementById("RevenueTTM").innerHTML = RevenueTTM;
        document.getElementById("GrossProfitTTM").innerHTML = GrossProfitTTM;
        document.getElementById("DilutedEPSTTM").innerHTML = DilutedEPSTTM;
        document.getElementById("QuarterlyEarningsGrowthYOY").innerHTML = QuarterlyEarningsGrowthYOY;
        document.getElementById("QuarterlyRevenueGrowthYOY").innerHTML = QuarterlyRevenueGrowthYOY;
        document.getElementById("AnalystTargetPrice").innerHTML = AnalystTargetPrice;
        document.getElementById("TrailingPE").innerHTML = TrailingPE;
        document.getElementById("ForwardPE").innerHTML = ForwardPE;
        document.getElementById("PriceToSalesRatioTTM").innerHTML = PriceToSalesRatioTTM;
        document.getElementById("PriceToBookRatio").innerHTML = PriceToBookRatio;
        document.getElementById("EVToRevenue").innerHTML = EVToRevenue;
        document.getElementById("EVToEBITDA").innerHTML = EVToEBITDA;
        document.getElementById("Beta").innerHTML = Beta;
        document.getElementById("52WeekHigh").innerHTML = n52WeekHigh;
        document.getElementById("52WeekLow").innerHTML = n52WeekLow;
        document.getElementById("50DayMovingAverage").innerHTML = n50DayMovingAverage;
        document.getElementById("200DayMovingAverage").innerHTML = n200DayMovingAverage;
        document.getElementById("SharesOutstanding").innerHTML = SharesOutstanding;
        document.getElementById("SharesFloat").innerHTML = SharesFloat;
        document.getElementById("SharesShort").innerHTML = SharesShort;
        document.getElementById("SharesShortPriorMonth").innerHTML = SharesShortPriorMonth;
        document.getElementById("ShortRatio").innerHTML = ShortRatio;
        document.getElementById("ShortPercentOutstanding").innerHTML = ShortPercentOutstanding;
        document.getElementById("ShortPercentFloat").innerHTML = ShortPercentFloat;
        document.getElementById("PercentInsiders").innerHTML = PercentInsiders;
        document.getElementById("PercentInstitutions").innerHTML = PercentInstitutions;
        document.getElementById("ForwardAnnualDividendRate").innerHTML = ForwardAnnualDividendRate;
        document.getElementById("ForwardAnnualDividendYield").innerHTML = ForwardAnnualDividendYield;
        document.getElementById("DividendDate").innerHTML = DividendDate;
        document.getElementById("PayoutRatio").innerHTML = PayoutRatio;
        document.getElementById("ExDividendDate").innerHTML = ExDividendDate;
        document.getElementById("LastSplitFactor").innerHTML = LastSplitFactor;
        document.getElementById("LastSplitDate").innerHTML = LastSplitDate;
        
        document.getElementById("tvurl").href = "https://www.tradingview.com/symbols/NASDAQ-" + symbol

        if (symbol == undefined) {
            document.getElementById("choose").style.display = "block";
            document.getElementById("nosee").style.display = "none";
            document.getElementById("choose").innerHTML = "Stock not found."
        } else {
            document.getElementById("nosee").style.display = "block";
        }

        new TradingView.widget(
            {
            "width": 980,
            "height": 610,
            "symbol": exchange + ":" + ticker ,
            "interval": "D",
            "timezone": "Etc/UTC",
            "theme": "light",
            "style": "1",
            "locale": "en",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": false,
            "allow_symbol_change": true,
            "container_id": "tradingview_e4d82"
          }
            );
        
    }
    });
    
    
    
}
var tickerr = document.getElementById("inp1");
tickerr.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
     gj()
    }
  });
