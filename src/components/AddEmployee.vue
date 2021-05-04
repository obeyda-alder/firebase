<template>
   <div class="container">
       <div class="row">
           <div class="col">
               Add Employee
               <a href="/"> Employee List</a>
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
                   <button type="submit" class="btn btn-primary">Submit</button>
               </form>
           </div>
       </div>
   </div>
</template>
    
<script>
import firebase from '../firebase';
import router from '../router';
export default {
    name:'AddEmployee',
    data(){
        return {
            employee:{},
            ref:firebase.firestore().collection('employees')
        }
    },
    methods:{
        onSubmit(ev){
             ev.preventDefault();
           this.ref.add(this.employee).then(()=>{
               this.employee.name = '',
               this.employee.department = '',
               this.employee.age = '',
               router.push({
                   name: 'Employeelist'
               })
           }).catch((e)=>{
               alert('Error', e)
           })
        }
    }
}
</script>