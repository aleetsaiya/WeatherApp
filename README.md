# 天氣App

**[Visit Online](https://aleetsaiya.github.io/WeatherApp/)** 

這份作品是我剛上完 React 課程後所做的作品，主要功能是藉由中央氣象局提供的 API，來獲得淡水當前的天氣概況。

Ref: [[Day 16 - 即時天氣] 定義並請求組件會使用到的資料 - useState 的更多使用](https://ithelp.ithome.com.tw/articles/10224031)

## API
+ [氣象資料開放平台](https://opendata.cwb.gov.tw/index)
+ [中央氣象局開放資料平臺之資料擷取API](https://opendata.cwb.gov.tw/dist/opendata-swagger.html)
+ [預報XML產品預報因子欄位中文說明表](https://opendata.cwb.gov.tw/opendatadoc/MFC/D0047.pdf)

## Gif 來源
[Weather Icon Set - Mostly Sunny](https://dribbble.com/shots/6193524-Weather-Icon-Set-Mostly-Sunny)

[Weather Icon Set - Rain](https://dribbble.com/shots/6193512-Weather-Icon-Set-Rain)

## 心得
做這次的過程中發現 **"setState 不一定 會馬上更新 `State` 裡面的值"**，如果要立即使用更新完後的 `State` 裡面的值的話，應該使用 updater 來去進行更新。還有使用到 `axios` 來進行 api 串接，以及配合 `Promise` 來進行非同步的操作。

Ref:  
+ [React官方文件-setState()](https://zh-hant.reactjs.org/docs/react-component.html#setstate)
+ [setState In React: 淺談 React 中 setState 的使用-同步 or 非同步？](https://medium.com/@brianwu291/learn-basic-react-setstate-function-2aec5018a38a)

## Preview
<img width="670" alt="螢幕擷取畫面 2022-03-29 161202" src="https://user-images.githubusercontent.com/67775387/160565338-296fae20-b455-49ac-8d44-045193d341dc.png">
