function setBool(index, option){
    var element = document.getElementById('bool'+index)
    var andEle = element.getElementsByClassName('and')[0]
    var orEle = element.getElementsByClassName('or')[0]
    var notEle = element.getElementsByClassName('not')[0]
    if (option === 'and'){
        if(andEle.classList.contains('active'))
            andEle.classList.remove('active')
        else{
            andEle.classList.add('active')
            orEle.classList.remove('active')
            notEle.classList.remove('active')
        }
    }
    else if (option === 'or'){
        if(orEle.classList.contains('active'))
            orEle.classList.remove('active')
        else{
            andEle.classList.remove('active')
            orEle.classList.add('active')
            notEle.classList.remove('active')
        }
    }
    else if (option === 'not'){
        if(notEle.classList.contains('active'))
            notEle.classList.remove('active')
        else{
            andEle.classList.remove('active')
            orEle.classList.remove('active')
            notEle.classList.add('active')
        }
    }
    else if(option === 'clear'){
        andEle.classList.remove('active')
        orEle.classList.remove('active')
        notEle.classList.remove('active')
    }
    return false
}

function clearForm(){
    var form = document.getElementById("form");   
    form.reset();
    setBool(1,'clear');
    setBool(2,'clear');
    setBool(3,'clear');
}

function search(){
    location.href = 'result.html'
}

function help(){
    window.open('help.html',"","menubar=0, width=400, height=500")
}