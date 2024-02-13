---- auth > WebSignup.vue ----
<template>
  <div class="container-fluid py-5" style="background-color: #f5f5f5">
    <div style="background-color: #ffffff" class="p-5 m-auto signup-form">
      <div class="text-center">
        <img src="../../assets/images/Logo.png" alt="Logo" />
        <h2 class="mt-4">Create your account</h2>
        <p>Enter your details to use all the app features.</p>
      </div>
      <form class="mt-3">
        <div class="row">
          <div class="col-md-6">
            <base-input type="text" identiy="firstname" placeholder="Ex. Jack" label="Firstname"></base-input>
          </div>
          <div class="col-md-6">
            <base-input type="text" identiy="lastname" placeholder="Ex. Daniel" label="Lastname"></base-input>
          </div>
        </div>
        <div class="my-4">
        </div>
        <div class="my-4">
          <base-input type="email" identiy="email" placeholder="Your email address" label="Email"></base-input>
        </div>
        <div class="my-4">
          <base-input type="password" identiy="password" placeholder="Your password" label="Password"></base-input>
        </div>
        <div class="my-4">
          <base-input type="password" identiy="confirmationPassword" placeholder="Same with your password"
            label="Confirmation Password"></base-input>
        </div>
        <div class="my-4">
          <base-input type="file" identity="recipeImage" label="Profile Photo" isImage="true">
            <div>
              <div class="border p-1 mt-2 rounded-circle">
                <img src="../../assets/images/Logo.png" class="rounded-circle" width="140" height="150"
                  style="object-fit: cover" />
              </div>
              <div class="text-center" style="transform: translateY(-24px)">
                <i class="fa-solid fa-camera fs-5 p-2 rounded-circle bg-white"></i>
              </div>
            </div>
          </base-input>
        </div>
      </form>
      <base-button class="login w-100 my-3">Register
      </base-button>
      <div class="text-center mt-4">
        <p class="fw-semibold">
          Already have an account? <router-link to="/login" class="text-decoration-none">Login</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseInput from '../ui/BaseInput.vue';
import BaseButton from '../ui/BaseButton.vue';
</script>