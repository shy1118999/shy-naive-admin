<!--
 * @Author: shaohang-shy
 * @Date: 2022-09-03 21:02:13
 * @LastEditors: shaohang-shy
 * @LastEditTime: 2023-01-30 11:28:14
 * @Description: icon list
-->
<script setup lang="ts">
const iconNames = ['KTV', 'QQ', 'TV', 'VIP', 'WIFI', 'a-xiugai2', 'anquan', 'anquanzhongxin', 'anquanzhongxin1', 'anzi', 'axios', 'baike', 'bangzhu', 'bangzhu1', 'banji', 'banjiang', 'bankashenqing', 'baogao', 'baohu', 'baojian', 'baomi', 'baoxiao', 'biancheng', 'bianji', 'bianqian', 'biaodan', 'biaoji', 'biaoqian 2', 'biaoqian', 'biaoshu', 'biaozhang', 'biji', 'caidan', 'ceping', 'cetizhong', 'chakanbingli', 'chanpin', 'chaoshi', 'chaping', 'chaxun', 'chihewanle', 'chongdianzhuang', 'chongwu', 'chongwu1', 'chongzhizhongxin', 'chucha', 'chucheshenqing', 'chuju', 'chuyi', 'chuzuche', 'cunchu', 'daiban', 'daifahuo', 'daifukuan', 'daishouhuo', 'daka', 'dakaqiandao', 'daogou', 'daohang', 'dianping', 'dianshiju', 'dianshiju1', 'dianzan 2', 'dianzan', 'dianzimingpian', 'dingdan 2', 'dingdan', 'dingdanchaxun', 'dingding', 'dingyue', 'ditiepiao', 'ditu', 'dongman', 'douban', 'duihuanma', 'echarts', 'elemo', 'ershouche', 'fangchan', 'fanhui', 'fankui', 'fapiao', 'fapiao1', 'faxian', 'feijipiao', 'fengxianpinggu', 'fengxianpinggu1', 'fenxiang 2', 'fenxiang', 'fenxiangerweima', 'fujin', 'fuli', 'fushi', 'gaishuai', 'gengduo', 'gengduoyingyong', 'gequ', 'gonggao', 'gonggao1', 'gonglve', 'gonglve1', 'gonglve2', 'gongsi', 'gongsigonggao', 'gongwu', 'gongzichaxun', 'gongzimingxi', 'gouwu', 'guahao', 'guanbi', 'guanggao', 'guanlishezhi', 'guanyuwomen', 'guanzhu', 'gupiao', 'gupiao1', 'hangkong', 'hangqing', 'hangye', 'heian', 'hetong', 'hezuo', 'hongbao', 'hongbao1', 'hongpei', 'huaban', 'huangguan', 'huangjin', 'huati', 'huati1', 'huazhuangpin', 'huiyishenqing', 'huiyuan', 'huiyuan1', 'huiyuanka', 'huiyuanquanyi', 'huochepiao', 'huochepiao1', 'huodong', 'huodong1', 'huore', 'jiabanshenqing', 'jiadian', 'jiaju', 'jiance', 'jiangbei', 'jiangpai', 'jiangxiang', 'jianshen', 'jiaohuan', 'jiaoyi', 'jiaoyu', 'jiaoyu1', 'jiaoyu2', 'jiaoyu3', 'jiayou', 'jiayou1', 'jiazai', 'jiazhao', 'jiesuo', 'jifen', 'jifenduihuan', 'jingdian', 'jingdian1', 'jingxuan', 'jisuan', 'jisuanqi', 'jiudian', 'jiushui', 'jiushui1', 'kabao', 'kafei', 'kaizhibaoxiao', 'kaoqin', 'kaoqinguanli', 'kaquanbao', 'kecheng', 'kefuguanli', 'keji', 'kongjian', 'koubei', 'koulingmibao', 'kuaixun', 'laodonghetong', 'leida', 'liangse', 'liangyou', 'lianjie', 'lianxi', 'licai', 'licaibao', 'lipin', 'liuchengshenpi', 'liuliangka', 'liuyan', 'lizhishenqing', 'luntan', 'luyin', 'lvyou', 'meishi', 'meishi1', 'meituan', 'miaosha', 'miaosha1', 'mima', 'mogujie', 'muying', 'muying1', 'naiveui', 'naozhong', 'nvzhuang', 'paihang', 'paihang1', 'paike', 'paimai', 'paiming', 'paishe', 'paizhao', 'peisong', 'pingfen', 'pingjia', 'pingjia1', 'pinia', 'pinpai', 'qianbao', 'qianbao1', 'qiche', 'qiche1', 'qichepiao', 'qingdan', 'qinggan', 'qingjiashenqing', 'qinzi', 'qiye', 'qiyebumen', 'qiyexiangce', 'quanwei', 'quanxian', 'quanyi', 'quanzi', 'qunti', 'qushi', 're', 'renlizhaopin', 'renwu', 'renwu1', 'renwuguanli', 'riji', 'rili 2', 'rili', 'rili1', 'shaixuan', 'shanchu 2', 'shanchu', 'shangcheng', 'shangcheng1', 'shangchuan', 'shangchuanwenjian', 'shangjia', 'shangou', 'shangpu', 'shangyiye', 'shenghuo', 'shenghuo1', 'shenghuojiaofei', 'shengxianshuiguo', 'shenhe', 'shenpi', 'shenpiliucheng', 'shezhi 2', 'shezhi', 'shijian', 'shipin', 'shipin1', 'shipinliaotian', 'shiwuzhaoling', 'shoucang 2', 'shoucang', 'shoucang1', 'shoucangjia', 'shoucangjia1', 'shouhuodizhi', 'shounahe', 'shouqi', 'shouye', 'shu', 'shuiguo', 'shuji', 'sougoushuru', 'sousuo', 'taiyang', 'tianqi', 'tianqi1', 'tiaojie', 'tiaokong', 'tingchechang', 'tishi', 'tixian', 'tixing', 'tiyu', 'tongji', 'tongxunlu', 'tongzhi', 'tongzhuang', 'toutiao', 'tuandui', 'tuandui1', 'tuangou', 'tuijian', 'tuijianyoujiang', 'tupian', 'typescript', 'unocss', 'vite', 'vue', 'vueuse', 'waimai', 'wangluo', 'weibo', 'weixin', 'weizhangjiaofei', 'wenda', 'wenjian', 'wenjianjia', 'wodedingdan', 'wodemaidan', 'wuliu', 'wupinshenqing', 'wuyefei', 'xiangce', 'xiaoshuai', 'xiaoxi', 'xiayibu', 'xiayiye', 'xiazai', 'xiazaiwenjian', 'xiche', 'xihuan', 'xihuan1', 'xindong', 'xingbie', 'xingqu', 'xingxing', 'xinhao', 'xinpin', 'xinxi', 'xinyong', 'xinyongka', 'xinyuandan', 'xiugai', 'xiuxian', 'xuexiao', 'xunzhang 2', 'xunzhang', 'yanzheng', 'yaoqing', 'yejian', 'yexiao', 'yibao', 'yiduxinxiang', 'yijianfankui', 'yiliao', 'yiliao1', 'yiliao2', 'yingshi', 'yingyong', 'yinhangjigou', 'yinhangka', 'yinle', 'yinle1', 'yinle2', 'yinshua', 'yishu', 'yonghuchaxun', 'youhuiquan', 'youle', 'youxi', 'youxi1', 'youxi2', 'yuangongfankui', 'yuangongpingji', 'yuangongrenzheng', 'yuangongtongxinlu', 'yuangongyeji', 'yue', 'yule', 'yundong', 'yunshipin', 'zengsong', 'zhanghaoguanli', 'zhanghuxiugai', 'zhankai', 'zhaomu', 'zhengjian', 'zhibo', 'zhibo1', 'zhishi', 'zhongbiao', 'zhoubianyou', 'zhuangshi', 'zhuanzhang', 'zhuti', 'zichan', 'zichan1', 'zihangche', 'zixun', 'zixun1', 'zixun11', 'ziyuan', 'zoushi', 'zoushi1', 'zuji', 'zuzhi']
const source = ref('')
const { copy, isSupported, copied } = useClipboard({ source })
function handleCopy(name: string) {
  source.value = name
  if (isSupported.value)
    copy()
}
watchEffect(() => {
  if (copied.value)
    $message.success(`${source.value} copied!`)
})
</script>

<template>
  <div class="p-3">
    <n-h1>
      图标
    </n-h1>
    <p>点击图标复制组件名(例如：`{{ `<svg-icon name='QQ' />` }}`)。</p>
    <p>点击图标名称复制图片名(例如：`{{ `QQ` }}`)。</p>
    <p>图标来自<a class="text-blue" href="https://www.iconfont.cn/collections/detail?spm=a313x.7781069.0.da5a778a4&cid=42779">iconfont</a>，商业使用请联系作者。</p>
    <n-space>
      <n-space v-for="icon in iconNames" :key="icon" class="w-25 h-25 cursor-pointer" vertical justify="center" align="center" :title="icon">
        <n-icon size="40" @click="handleCopy(`<svg-icon name='${icon}' />`)">
          <svg-icon :name="icon!" />
        </n-icon>
        <span @click="handleCopy(icon!)">{{ icon }}</span>
      </n-space>
    </n-space>
  </div>
</template>
