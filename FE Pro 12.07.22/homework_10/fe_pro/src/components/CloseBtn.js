function CloseBtn () {
    return <div className="cursorPointer closeBtn" onClick={() => 
        {console.log(document.getElementsByClassName('bg-gray-transp')[0].classList.add('d-none'))}}>✕</div>
}

export default CloseBtn;