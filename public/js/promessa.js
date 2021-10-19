const betterDeveloper = 'vanessa'

function whoIsBetterCallBack() {
    return new Promise((resolve, reject) => {

        if (betterDeveloper != 'vanessa' && betterDeveloper != 'gabriel') {
            reject({
                name: 'This is wrong',
                message: betterDeveloper + '? Really'
            })
        } else {
            resolve({
                name: betterDeveloper,
                message: 'CDFs are the best!'                
            })
        }
    })  
}

whoIsBetterCallBack()
    .then((result)=> {
        console.log(result.name + '? Yeah! ' + result.message)
    })
    .catch((error) => {
        console.log(error.name + ' ' + error.message)
    })
