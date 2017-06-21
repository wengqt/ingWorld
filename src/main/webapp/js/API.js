/**
 * Created by zhou on 2017/6/13.
 */
var base = 'http://wangjingxin.top:8080';
var API = {
    base:base,
    postResume: this.base + '/api/plain/uploadResume',
    introduce: this.base + '/api/plain/getStudioIntro',
    login: this.base + '/api/plain/login',
    getNotice: this.base + '/api/member/getNotice',
    uploadNotice: this.base + '/api/admin/uploadNotice',
    deleteNotice: this.base + '/api/admin/deleteNotice',
    vote:this.base + '/api/member/vote'
}