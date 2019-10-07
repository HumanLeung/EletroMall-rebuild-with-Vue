import {instance_1} from './axios'
export const mixinsTool = {
    data: () => ({
       svg: null
    }),
    methods:{
        
    },
    created() {
        instance_1.get('/svg.json')
        .then(res => {
            this.svg = res.data
            console.log('hellp')
            eventBus.getSvg(this.svg)
        })
        .catch(error => console.log(error))
    },
}