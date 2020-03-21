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
export default {
	data() {
		return {
			subscribe: {
				email: ""
			}
		};
	},
	methods: {
		submitForm(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					alert("submit!");
				} else {
					alert("error");
					return false;
				}
			});
		}
	}
};
</script>