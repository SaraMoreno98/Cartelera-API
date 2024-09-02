export function toggleMenu(){
    let myNav = document.getElementById('myNavbar')

    if(myNav.className === 'navbar'){
        myNav.className += " responsive"
    }else{
        myNav.className = "navbar"
    }
}