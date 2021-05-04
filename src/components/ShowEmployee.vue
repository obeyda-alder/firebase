<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h2>Show Employee
                    <a href="/"> Employee List</a>
                </h2>
            </div>
            <div class="col">
               <label for="">name </label> {{employee.name}}
            </div>
            <div class="col">
               <label for="">age </label> {{employee.age}}
            </div>
            <div class="col">
               <label for="">department </label> {{employee.department}}
            </div>
            <div class="col">
                <button type="button" class="btn btn-primary" 
                    @click="editemployee(key)">Edit</button> 
                <button type="button" class="btn btn-primary" 
                    @click="deleteemployee(key)">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from '../firebase';
import router from '../router';
export default {
    name: 'ShowEmployee',
    data(){
        return {
            key:'',
            employee:{}
        }
    },
    created (){
        const ref = firebase.firestore().collection('employees').doc(this.$route.params.id)
        ref.get().then((doc)=>{
            if(doc.exists){
                this.key = doc.id,
                this.employee = doc.data();
            }else{
                alert('No employee found')
            }
        })
    },
    methods:{
      editemployee(id){
          router.push({
              name:'EditEmployee' , params:{id:id}
          })
      },
      deleteemployee(id){
          firebase.firestore().collection('employees').doc(id).delete().then(()=>{
              router.push({
                  name:'EmployeeList'
              })
          }).catch((e)=>{
              alert('Error' , e)
          })
      }
    }
}
</script>