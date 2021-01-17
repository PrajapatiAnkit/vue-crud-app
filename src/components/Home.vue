<template>
    <div>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
            </ol>
        </nav>
        <div class="container-fluid">
           <div class="row">
               <div class="col-md-4">
                   <div class="card" style="width: 18rem;">
                       <div class="card-body">
                           <h5 class="card-title">Total Users</h5>
                           <h6 class="card-subtitle mb-2 text-muted">0</h6>
                           <a href="#" class="card-link">View User</a>
                       </div>
                   </div>
               </div>
               <div class="col-md-4">
                   <div class="card" style="width: 18rem;">
                       <div class="card-body">
                           <h5 class="card-title">Active Users</h5>
                           <h6 class="card-subtitle mb-2 text-muted">0</h6>
                           <a href="#" class="card-link">View User</a>
                       </div>
                   </div>
               </div>
               <div class="col-md-4">
                   <div class="card" style="width: 18rem;">
                       <div class="card-body">
                           <h5 class="card-title">Inactive Users</h5>
                           <h6 class="card-subtitle mb-2 text-muted">0</h6>
                           <a href="#" class="card-link">View User</a>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>

</style>
