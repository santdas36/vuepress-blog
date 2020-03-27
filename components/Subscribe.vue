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
      { required: true, message: 'Please enter your email address', trigger: 'blur' }
    ]"
  >
    <el-input v-model="subscribe.email" type="email" placeholder="Email"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button size="small" :loading="loading" :type="type" @click="submitForm('subscribe')">{{ subscribeText }}</el-button>
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
			subscribe: {email: ''},
			subscribeText: "Subscribe",
		};
	},
	methods: {
		submitForm(formName) {
               this.loading = true;
               this.subscribeText = "Loading";
			this.$refs[formName].validate(valid => {
				if (valid) {
					subscribeToMailchimp(this.email).then(res => {
                           this.loading = false;
                           this.type = 'success';
                           this.subscribeText = 'Done';
                           this.$message({ message: 'Congrats. Your subscription is now active.', type: 'success' });
                         });
				} else {
					this.loading = false
				}
			});
		}
	}
};
</script>