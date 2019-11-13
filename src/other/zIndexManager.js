var zIndexManager = {
        max: 1000,
        store : [  ],
        open(el){
            this.max++
            this.store.push({el,z:this.max})
            return this.max
        },
        close(el){
            var indexInArray = this.find(el),
                zTemp = this.store[indexInArray].z

            this.store.splice(indexInArray,1)

            if(this.max == zTemp) {
                this.max = this.store.reduce( (acum, item)=>{
                    return acum > item.z ? acum : item.z 
                },0)
                console.log(this.max)
            }

            return -1
        },
        find(el){
            return this.store.findIndex(obj=>obj.el==el)
        }
    }
export default zIndexManager