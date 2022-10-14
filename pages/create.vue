<template>
<div>
    <p>Table</p>
    <pre>{{this.majorss}}</pre>

    <div>
        <v-form @submit.prevent="postmajor" >
            <v-text-field label="major post" v-model="form.name"></v-text-field>
            <v-btn type="submit">ADD</v-btn>
        </v-form>
    </div>


</div>
</template>

<script>
import {
    Core
} from '../vuexs/core'
export default {
    data: () => {
        return ({
            majorss: [],
            form:{}
        })
    },
    async created() {
        await this.getmajor()
        await this.postmajor()
        
    },
    methods: {
        async getmajor() {
            this.majorss = await Core.getHttp('/api/company/major/')
        },
        async postmajor(){
          this.postmajor = await Core.postHttp('/api/company/major/' , this.form)
        },
         
    }
}
</script>

<style>

</style>
