function setBool(index, option){
    var element = document.getElementById('bool'+index)
    var andEle = element.getElementsByClassName('and')[0]
    var orEle = element.getElementsByClassName('or')[0]
    var notEle = element.getElementsByClassName('not')[0]
    if (option === 'and'){
        andEle.classList.add('active')
        orEle.classList.remove('active')
        notEle.classList.remove('active')
    }
    else if (option === 'or'){
        andEle.classList.remove('active')
        orEle.classList.add('active')
        notEle.classList.remove('active')
    }
    else if (option === 'not'){
        andEle.classList.remove('active')
        orEle.classList.remove('active')
        notEle.classList.add('active')
    }
    return false
}

function clearForm(){
    var form = document.getElementById("form");   
    form.reset();
}

function search(){
    location.href = 'result.html'
}