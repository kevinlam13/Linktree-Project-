const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)


async function copyText(e){

    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try { 
       await navigator.clipboard.writeText(link)
       alert("Copied the Link!" + link)
    } catch (err) {
        console.error(err)
    }

}
shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText))


const shareButton = document.querySelectorAll('.share-button')
console.log(shareButtons)


async function copyText(e){

    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try { 
       await navigator.clipboard.writeText(link)
       alert("Copied the Link!" + link)
    } catch (err) {
        console.error(err)
    }

}
shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText))



