<template>
<div class="subscribe-container">
<el-form
	:model="subscribe"
	ref="subscribe"
	class="subscription-form"
>
  <el-form-item
    prop="email"
    :rules="[
      { required: true, type: 'email', message: 'Check your input...', trigger: 'blur' }
    ]"
  >
    <el-input v-model="subscribe.email" placeholder="Email"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button size="small" :loading="loading" :type="type" @click="submitForm('subscribe')">Subscribe</el-button>
  </el-form-item>
</el-form>
</div>
</template>
<script>
import subscribeToMailchimp from "vuepress-plugin-mailchimp/src/mailchimpSubscribe";
export default {
	data() {
		return {
               loading: false,
               type: "primary",
			subscribe: {
				email: ""
			},
		};
	},
	methods: {
		submitForm(formName) {
               this.loading = true;
			this.$refs[formName].validate(valid => {
				if (valid) {
					subscribeToMailchimp(this.mail).then(res => {
                           this.loading = false;
                           this.type = "success";
                            setTimeout( function(){this.type = "primary"}, 1000);
                         });
				} else {
					this.loading = false
				}
			});
		}
	}
};
</script>