<template>
   <div class="container">
       <div class="row">
           <div class="col">
               Edit Employee
               <router-link :to="{name: 'ShowEmployee', params:{id:key} }">ShowEmployee</router-link>
           </div>
           <div class="col">
               <form @submit="onSubmit">
                   <div class="form-group">
                       <label>Name</label>
                       <input type="text" class="form-control" v-model="employee.name">
                   </div>
                   <div class="form-group">
                       <label>Age</label>
                       <input type="text" class="form-control" v-model="employee.age">
                   </div>
                   <div class="form-group">
                       <label>Department</label>
                       <input type="text" class="form-control" v-model="employee.department">
                   </div>
                   <button type="submit" class="btn btn-primary">Update</button>
               </form>
           </div>
       </div>
   </div>
</template>
    
<script>
import firebase from '../firebase';
import router from '../router';
export default {
    name:'EditEmployee',
    data(){
        return {
            key: this.$route.params.id,
            employee:{}
        }
    },
    created(){
        const ref = firebase.firestore().collection('employees').doc(this.$route.params.id)
        ref.get().then((doc)=>{
            if(doc.exists){
                this.employee = doc.data();
            }else{
                alert('No Employee Found')
            }
        })
    },
    methods:{
        onSubmit(ev){
            ev.preventDefault();
            const updateRef = firebase.firestore().collection('employees').doc(this.$route.params.id);

            updateRef.set(this.employee).then(()=>{

                this.employee.name = '',
                this.employee.department = '',
                this.employee.age = '',
                router.push({
                    name: 'ShowEmployee', params:{id:this.$route.params.id}
                })
            }).catch((e)=>{
               alert('Error', e)
           })
        }
    }
}
</script>