import logo from '../assets/logo.webp'
import './Header.css'
export function Headers(){
    return (
        <header className='header'>

        {/* logo */}
        <div className='header-logo'>
          <img src={logo} alt="" />
        </div>
        <div className='header-mune'>
          {/* 一级菜单 */}
          <div className='frist-nav-contains'>
            <ul className='first-nav'>
              <li><a>游戏资料<em>DATA</em></a></li>
              <li><a>内容中心<em>CONTENTS</em></a></li>
              <li><a>赛事中心<em>MATCH</em></a></li>
              <li><a>百态王者<em>CULTURE</em></a></li>
              <li><a>社区互动<em>COMMUNITY</em></a></li>
              <li><a>玩家支持<em>PLAYER</em></a></li>
              <li><a>IP新游<em>NEW GAMES</em></a></li>
            </ul>
          </div>
          {/* 二级菜单 */}
          <div className='secon-nav-contains'>
            <ul className='secon-nav'>
              <li >
                <a><i className='icons iconshot'></i>版本介绍</a>
                <a>游戏介绍</a>
                <a>英雄资料</a>
                <a>爆料站</a>
                <a>世界观体验站</a>
                <a>游戏壁纸</a>
              </li>
              <li>
                <a>攻略中心</a>
                <a>开放素材库</a>
                <a>内容共创平台</a>
                <a>手语打法参考</a>
              </li>
              <li>
                <a>王者世冠KIC</a>
                <a>KPL</a>
                <a>K甲联赛</a>
                <a>挑战者杯</a>
                <a>全国大赛</a>
                <a>高校联赛</a>
                <a>王者赛宝</a>
                <a>赛事数据</a>
              </li>
              <li>
                <a>荣耀·传承</a>
                <a>王者文化站</a>
                <a>万千世界</a>
                <a>王者绝悟</a>
                <a>星光殿堂</a>
                <a>IP共创计划</a>
                <a>商户特权</a>
                <a>龙翼王者卡</a>
              </li>
              <li>
                <a>创意互动营</a>
                <a>王者营地</a>
                <a>微信圈子</a>
                <a>官方微博</a>
                <a>微信公众号</a>
                <a>手Q订阅号</a>
              </li>
              <li>
                <a>腾讯游戏防沉迷</a>
                <a> <i className='icons icongrown'></i>成长守护平台</a>
                <a>对局环境情报站</a>
                <a>客服专区</a>
                <a>礼包兑换</a>
                <a>自助服务</a>
              </li>
              <li>
                <a>王者荣耀·世界</a>
                <a>王者荣耀 星之破晓</a>
                <a>代号:启程</a>
                <a>王者万象棋</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='header-login'>
          <div className='loginLogo'></div>
          <div>
            <div className='welcoms'>欢迎登录</div>
            <div className='loginchack'>登录后查看游戏战绩</div>
          </div>
        </div>
      </header>
    )
}