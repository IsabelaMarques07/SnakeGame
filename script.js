 
    window.onload = function(){

        var stage = document.getElementById('stage')
        var ctx = stage.getContext("2d")

        document.addEventListener("keydown", keyPush)

        setInterval(game, 60)


        const vel = 1
        var vx = vy = 0
        var px = 10
        var py = 15
        var tp = 20
        var qp = 20
        var ax = ay = 15
        var trail = []
        tail = 5

        var bestScore = document.getElementById('bestScore')
        var bScore = 0;

        var score = document.getElementById('score')
        var scoreNow = 0;


        function game(){

            bestScore.innerHTML = `Best Score: ${bScore}`
            score.innerHTML = `Score: ${scoreNow}`

            px += vx
            py += vy

            if(px < 0){
                px = qp-1
            }
            if(px > qp-1){
                px = 0
            }
            if(py < 0){
                py = qp-1
            }
            if(py > qp -1){
                py = 0
            }

            ctx.fillStyle = "#7fbe7d"
            ctx.fillRect(0, 0, stage.width, stage.height)

            ctx.fillStyle = "red"
            ctx.fillRect(ax*tp, ay*tp, tp, tp)

            ctx.fillStyle = "gray"
            for (var i = 0; i < trail.length; i++) {

                ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp, tp)

                if(trail[i].x == px && trail[i].y == py){

                    vx = vy = 0

                    tail = 5
                    if(scoreNow > bScore){
                        bScore = scoreNow
                    }
                    scoreNow = 0
                }
            }

            trail.push({x:px, y:py})

            while(trail.length > tail){
                trail.shift()
            }

            if(ax == px && ay == py){
                tail++
                scoreNow += 10
                ax = Math.floor(Math.random()*qp)
                ay = Math.floor(Math.random()*qp)
            }
        
        }


        function keyPush(event){
            switch(event.keyCode){
                case 65: 
                    vx = -vel
                    vy = 0
                    break;

                case 87: 
                    vx = 0
                    vy = -vel
                    break;

                case 68:
                    vx = vel
                    vy = 0
                    break;

                case 83:
                    vx = 0
                    vy = vel
                    break;

                default:
                    break;
            }
        }

    }
    