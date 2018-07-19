/* ========================================================
                        小程序配置文件
======================================================== */

// 域名
// let host = 'https://erp.fdtx.cn';
let host = 'http://211.155.225.25/CEPMTEST'

// 下面的地址配合云端 Demo 工作
export const service = {
    // 列表接口 GET
    login: `${host}/app/wxyhbd.do?method=wxyhbd`,
    get_wxzhRegister: `${host}/app/wxzhRegister.do?method=wxzhRegister`,
    get_wxzhjb: `${host}/app/wxzhjb.do?method=wxzhjb`,
    get_hint_num_info: `${host}/app/getHintNumInfo.do?method=getHintNumInfo`,
    get_list_mail: `${host}/app/listMail.do?method=listMail`,
    get_view_file: `${host}/app/viewFile.do?method=viewFile`,
    get_details_mail: `${host}/app/viewReceiveMail.do?method=viewReceiveMail`,
    get_list_BusinessManageStatus: `${host}/app/listBusinessManageStatus.do?method=listBusinessManageStatus`,
    get_view_SinoBusinessManageStatus: `${host}/app/viewSinoBusinessManageStatus.do?method=viewSinoBusinessManageStatus`,
    get_act_SinoBusinessManageStatus: `${host}/app/actSinoBusinessManageStatus.do?method=actSinoBusinessManageStatus`,
    get_list_CheckWork: `${host}/app/listCheckWork.do?method=listCheckWork`,
    get_info_viewSinoCheck: `${host}/app/viewSinoCheckInfo.do?method=viewSinoCheckInfo`,
    get_input_CheckOpinionBefore: `${host}/app/inputCheckOpinionBefore.do?method=inputCheckOpinionBefore`,
    get_commit_CheckOpinion: `${host}/app/commitCheckOpinion.do?method=commitCheckOpinion`,

    get_list_Info: `${host}/app/listInfo.do?method=listInfo`,
    get_list_UserAddressList: `${host}/app/listUserAddressList.do?method=listUserAddressList`,
    get_UserInfo: `${host}/app/getUserInfo.do?method=getUserInfo`,
    get_list_BusinessManageNowStatus: `${host}/app/listUserAddressList.do?method=listBusinessManageNowStatus`,
    get_focus_ForBusiness: `${host}/app/setFocusForBusiness.do?method=setFocusForBusiness`,
    get_list_IndexPage: `${host}/app/listIndexPage.do?method=listIndexPage`,
    get_list_UserForDeptRole: `${host}/app/listUserForDeptRole.do?method=listUserForDeptRole`,
    get_list_SystemRoleList: `${host}/app/listSystemRoleList.do?method=listSystemRoleList`,
    get_send_Main: `${host}/app/sendMail.do?method=sendMail`,
    get_update_UserInfo: `${host}/app/updateUserInfo.do?method=updateUserInfo`,
    get_search_BusinessList: `${host}/app/searchBusinessList.do?method=searchBusinessList`,
    get_search_BusinessButton: `${host}/app/getSearchBusinessButton.do?method=getSearchBusinessButton`,
    // 维护日报
    get_list_MaintenanceTask: `${host}/app/listMaintenanceTask.do?method=listMaintenanceTask`,
    get_view_MaintenanceTask: `${host}/app/viewMaintenanceTask.do?method=viewMaintenanceTask`,
    get_commit_MaintenanceTask: `${host}/app/commitMaintenanceTask.do?method=commitMaintenanceTask`,
    get_file_upload: `${host}/app/uploadFile.do?method=uploadFile`,
    get_file_delete: `${host}/app/deleteFile.do?method=deleteFile`,
    get_list_MaintenanceSite: `${host}/app/listMaintenanceSite.do?method=listMaintenanceSite`,
    get_list_MaintenanceOpTypeList: `${host}/app/listMaintenanceOpTypeList.do?method=listMaintenanceOpTypeList`,
    get_transfer_SignToLog: `${host}/app/transferSignToLog.do?method=transferSignToLog`,
    get_delete_MaintenanceSign: `${host}/app/deleteMaintenanceSign.do?method=deleteMaintenanceSign`,
    get_list_MaintenanceSite: `${host}/app/listMaintenanceSite.do?method=listMaintenanceSite`,
    get_view_MaintenanceSite: `${host}/app/viewMaintenanceSite.do?method=viewMaintenanceSite`,
    get_commit_MaintenanceSite: `${host}/app/commitMaintenanceSite.do?method=commitMaintenanceSite`,
    get_commit_MaintenanceCarOpLog: `${host}/app/commitMaintenanceCarOpLog.do?method=commitMaintenanceCarOpLog`,
    get_share_Sign: `${host}/app/shareSign.do?method=shareSign`,
    get_new_MaintenanceTask: `${host}/app/newMaintenanceTask.do?method=newMaintenanceTask`,
    // 主域
    host
}

export default {
    service
}