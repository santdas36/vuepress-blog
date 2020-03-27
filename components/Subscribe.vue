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
      { required: true, type: 'email', message: 'Please check again...', trigger: 'blur' }
    ]"
  >
    <el-input v-model="subscribe.email" placeholder="Email"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button size="small" :loading="loading" :type="type" @click="submitForm('subscribe')">{{ SubscribeText }}</el-button>
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
               SubscribeText: 'Subscribe',
		};
	},
	methods: {
		submitForm(formName) {
               this.loading = true;
               this.type = 'primary';
               this.SubscribeText = 'Loading...';
			this.$refs[formName].validate(valid => {
				if (valid) {
					subscribeToMailchimp(this.subscribe.email).catch(err => {
                           this.loading = false;
                           this.SubscribeText = 'Error';
                           this.type = 'warning';
                           this.$message({ message: err, type: 'warning' }); }).then(res => {
                           this.loading = false;
                           this.SubscribeText = 'Done';
                           this.type = 'success';
                           this.$message({ message: 'Congrats! Your subscription is now active.', type: 'success' });
                           setTimeout(()=>{ this.type = 'primary; this.SubscribeText = 'Subscribe' }, 2000);
                         });
				} else {
					this.loading = false;
					this.type = 'warning';
                         this.SubscribeText = 'Subscribe';
                         setTimeout(()=>{ this.type = 'primary; this.SubscribeText = 'Subscribe' }, 2000);
				}
			});
		}
	}
};
</script>