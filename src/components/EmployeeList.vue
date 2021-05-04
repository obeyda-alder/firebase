<template>
    <div>
        <h1> Employee List</h1>
        <h4> Add Employee</h4>
        <a href="/add">Add</a>

      <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">name</th>
                <th scope="col">department</th>
                <th scope="col">action</th>
            </tr>
        </thead>
        <tbody v-for="item in employees" :key="item.id">
            <tr>
                <th scope="row">{{ item.key }}</th>
                <td>{{item.name}}</td>
                <td>{{item.department}}</td>
                <td>
                    <button type="button" class="btn btn-primary" 
                    @click="details(item.key)">Show</button>
                </td>
            </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import firebase from '../firebase';
import router from '../router';
export default {
    name:'EmployeeList',
    data(){
        return{
            employees:[],
            ref: firebase.firestore().collection('employees')
        }
    },
    created(){
        this.ref.onSnapshot((querySnapshot)=>{
            this.employees = [];
            querySnapshot.forEach((doc)=>{
                this.employees.push({
                    key:doc.id,
                    name:doc.data().name,
                    age:doc.data().age,
                    department:doc.data().department
                })
            })
        })
    },
    methods:{
        details(employeeid){
            router.push({
                name: 'ShowEmployee', params:{id:employeeid}
            })
        }
    }
}
</script>