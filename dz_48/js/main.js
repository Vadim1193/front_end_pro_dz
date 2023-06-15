
function showPicture() {   
    const wrapperImg = document.querySelector('.wrapper_img');
    const myImgCollection = [
        './images/1.jpg',
        './images/2.jpg',
        './images/3.jpg',
        './images/4.jpg',
        './images/5.jpg',
        './images/6.jpg',
        './images/7.jpg',
        './images/8.jpg',
        './images/9.jpg',
    ];
    const randomPic = randomElement(myImgCollection); 
    const img = createImgTag(randomPic, 'myPicture');
    wrapperImg.append(img);


    function randomElement(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);

        return arr[randomIndex];
    }

    function createImgTag(src, alt) {
        const imgTag = document.createElement('img');
        imgTag.setAttribute("src", src);
        imgTag.setAttribute("alt", alt);
    
        return imgTag;
    }
};

window.onload = showPicture;








