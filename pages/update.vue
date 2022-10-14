<template>
<div>
    <p>Table</p>
    <pre>{{this.majorss}}</pre>
     <div>
        <v-form @submit.prevent="updatemajor">
            <v-text-field label="major update" v-model="form.id"></v-text-field>
            <v-text-field label="major update" v-model="form.name"></v-text-field>
            <v-btn type="submit">Update</v-btn>
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
        await this.getmajor();
        await this.updatemajor()
    },
    methods: {
        async getmajor() {
            this.majorss = await Core.getHttp('/api/company/major/')
        },
         
        async updatemajor() { 
             this.update = await Core.putHttp(`/api/company/major/${this.form.id}/`, this.form)
        },
         
    }
}
</script>

<style>

</style>
