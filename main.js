(
    function(){
        const second= 1000
        const minute= second * 60
        const hour= minute * 60
        const day= hour * 24

        let today = new Date()
        let dd = String(today.getDate()).padStart(2, "0")
        let mm = String(today.getMonth() + 1).padStart(2, "0")
        let yyyy = today.getFullYear()
        let nextYear = yyyy + 1
        let dayMonth = "12/31/"
        let anniversary = dayMonth + yyyy

        today = mm + '/' + dd + '/' + yyyy
        if(today > anniversary) {
            anniversary = dayMonth + nextYear
        }

        const countDown = new Date(anniversary).getTime()
        const x = setInterval(function(){
                const now = new Date().getTime(),
                    distance = countDown - now

            document.getElementById("days").innerText = Math.floor(distance/(day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day))/ (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour))/ (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute))/ (second))
            }, 0)    
            
    }()
)