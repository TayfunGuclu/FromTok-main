const videoContainer = document.getElementById("video-container");
const header = document.getElementById("header");
const contentRow = document.getElementById('content-row')
const infoIcon = document.getElementById('info-icon')

function computerDisplayImage(){
    height = '100vh'

    return height
}


function setDescriptionMaxHeight() {
    let pageHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    let headerHeight = header.clientHeight;
    let videoContainerHeight = videoContainer.clientHeight;
    let height = pageHeight - headerHeight - videoContainerHeight;

    return height;
}

function setContentHeight(){
    let pageHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    let headerHeight = header.clientHeight;
    let height = pageHeight - headerHeight

    return height
}

function adjustButton() {
    if (window.innerWidth > 768) {
        infoButton.style.width = '50px';
        infoButton.style.height = '50px';
        infoIcon.classList.remove('fa-lg');
        infoIcon.classList.add('fa-2xl');
    } else if (window.innerWidth < 768){
        infoButton.style.width = '25px';
        infoButton.style.height = '25px';
        infoIcon.classList.add('fa-lg');
        infoIcon.classList.remove('fa-2xl');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth > 768) {
        descriptionContainer.style.maxHeight = computerDisplayImage()
        descriptionContainer.style.height = computerDisplayImage()
        videoContainer.style.maxHeight = computerDisplayImage() 
        videoContainer.style.height = computerDisplayImage() 
    } else {
        descriptionContainer.style.maxHeight = setDescriptionMaxHeight() + 'px';
        descriptionContainer.style.height = setDescriptionMaxHeight() + 'px';
    }
    contentRow.style.maxHeight = setContentHeight() + 'px'
    contentRow.style.maxHeight = setContentHeight() + 'px'
    
    adjustButton()
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        descriptionContainer.style.maxHeight = computerDisplayImage()
        descriptionContainer.style.height = computerDisplayImage()
        videoContainer.style.maxHeight = computerDisplayImage() 
        videoContainer.style.height = computerDisplayImage() 
    } else {
        descriptionContainer.style.maxHeight = setDescriptionMaxHeight() + 'px';
        descriptionContainer.style.height = setDescriptionMaxHeight() + 'px';
    }
    contentRow.style.maxHeight = setContentHeight() + 'px'
    contentRow.style.maxHeight = setContentHeight() + 'px'

    adjustButton()
});


