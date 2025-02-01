let from = document.querySelector('form')
let nom = document.querySelector('input')

from.addEventListener('submit', function(e){
    e.preventDefault()
    if(nom.value.trim().length==0){
        alert('veuillez saisir un nom')
    }else{
        alert(`bonjour ${nom.value.trim()}!`)
    }
})