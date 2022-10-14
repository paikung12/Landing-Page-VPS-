<template>
<div>
    <p>Table</p>
    <pre>{{this.majorss}}</pre>

    <div>
        <v-form @submit.prevent="postmajor">
            <v-text-field label="major post" v-model="form.name"></v-text-field>
            <v-btn type="submit">ADD</v-btn>
        </v-form>
    </div>

     <div>
        <v-form @submit.prevent="updatemajor">
            <v-text-field label="major update" v-model="form.id"></v-text-field>
            <v-text-field label="major update" v-model="form.name"></v-text-field>
            <v-btn type="submit">Update</v-btn>
        </v-form>
    </div>


<div>
        <v-form @submit.prevent="updatemajor">
            <v-text-field label="major update" v-model="form.id"></v-text-field>
            <v-text-field label="major update" v-model="form.name"></v-text-field>
            <v-btn type="submit">Delete</v-btn>
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
        await this.postmajor()
        await this.updatemajor()
    },
    methods: {
        async getmajor() {
            this.majorss = await Core.getHttp('/api/company/major/')
        },
        async postmajor(){
          this.postmajor = await Core.postHttp('/api/company/major/' , this.form)
        },
        async updatemajor() { 
             this.update = await Core.putHttp(`/api/company/major/${this.form.id}/`, this.form)
        },
        async deletemajor() { 
             this.deletemajor = await Core.deleteHttp(`/api/company/major/${this.form.id}/`)
        },
    }
}
</script>

<style>

</style>
