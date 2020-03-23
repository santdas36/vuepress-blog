<template>
<div class="subscribe-container">
<el-form
	:model="subscribe"
	ref="subscribe"
	class="subscription-form"
>
  <el-form-item
    prop="name"
  >
    <el-input v-model="subscribe.name" placeholder="Name"></el-input>
  </el-form-item>
  <el-form-item
    prop="email"
    :rules="[
      { required: true, message: 'Please input your email address', trigger: 'blur' },
      { type: 'email', message: 'Something is wrong', trigger: ['blur', 'change'] }
    ]"
  >
    <el-input v-model="subscribe.email" placeholder="Email"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button size="small" type="primary" @click="submitForm('subscribe')">Subscribe</el-button>
  </el-form-item>
</el-form>
</div>
</template>
<script>
import subscribeToMailchimp from "vuepress-plugin-mailchimp/src/mailchimpSubscribe";
export default {
	data() {
		return {
			subscribe: {
				email: "",
                    mail: ""
			},
		};
	},
	methods: {
		submitForm(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					subscribeToMailchimp(this.mail, { FNAME: name }).then(res => {
                           alert("Done!"); });
				} else {
					alert("error");
					return false;
				}
			});
		}
	}
};
</script>