function getArticles () {
    const title1 = document.querySelector('#article-1 h2');
    const title2 = document.querySelector('#article-2 h2');
    const title3 = document.querySelector('#article-3 h2');
    const text1 = document.querySelector('#article-1 p');
    const text2 = document.querySelector('#article-2 p');
    const text3 = document.querySelector('#article-3 p');
    const image1 = document.querySelector('#article-1 img');
    const image2 = document.querySelector('#article-2 img');
    const image3 = document.querySelector('#article-3 img');
    const video1 = document.querySelector('#article-1 video');
    const video2 = document.querySelector('#article-2 video');
    const video3 = document.querySelector('#article-3 video');
    const day1 = document.querySelector('#article-1 .article-day');
    const day2 = document.querySelector('#article-2 .article-day');
    const day3 = document.querySelector('#article-3 .article-day');
    const month1 = document.querySelector('#article-1 .article-month');
    const month2 = document.querySelector('#article-2 .article-month');
    const month3 = document.querySelector('#article-3 .article-month');

    const imagePath = './images/';

    fetch('./db.json')
        .then((response) => { return response.json() })
        .then((articlesArr) => { 
            console.log(articlesArr);
            title1.innerHTML = articlesArr[0].title;
            title2.innerHTML = articlesArr[1].title;
            title3.innerHTML = articlesArr[2].title;

            text1.innerHTML = articlesArr[0].description;
            text2.innerHTML = articlesArr[1].description;
            text3.innerHTML = articlesArr[2].description;

            image1.src = imagePath + articlesArr[0].img;
            image2.src = imagePath + articlesArr[1].img;
            image3.src = imagePath + articlesArr[2].img;

            video1.poster = imagePath + articlesArr[0].img;
            video2.poster = imagePath + articlesArr[1].img;
            video3.poster = imagePath + articlesArr[2].img;

            let date1Arr = articlesArr[0].date.split(' ');
            day1.innerHTML = date1Arr[0];
            month1.innerHTML = date1Arr[1];

            let date2Arr =  articlesArr[1].date.split(' ');
            day2.innerHTML = date2Arr[0];
            month2.innerHTML = date2Arr[1];

            let date3Arr = articlesArr[2].date.split(' ');
            day3.innerHTML = date3Arr[0];
            month3.innerHTML = date3Arr[1];
            
            return articlesArr;
        });
}

getArticles();