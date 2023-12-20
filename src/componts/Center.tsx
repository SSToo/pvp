import { useEffect, useRef, useState } from 'react'
import './Center.css'
import ban1 from '../assets/ban1.jpeg'
import ban2 from '../assets/ban2.jpeg'
import ban3 from '../assets/ban3.jpeg'
import ban4 from '../assets/ban4.jpeg'

export function Center() {

  let [num,setnum] = useState(0)

  const bannerref = useRef<HTMLUListElement>(null)
  const textref = useRef<HTMLUListElement>(null)

    useEffect(()=>{
      const interval = setInterval(function(){
        if(num >= 4){
          setnum(0)
        }else{
          setnum(num++)
        }
        console.log(num);
      },2000)
      return ()=>clearInterval(interval)
    },[num])

  const handleClick = (e: any) => {
    var value = -e * 604 + 'px'
    var banner = bannerref.current
    if (banner) {
      banner.style.left = value
    }

    var text = textref.current
    var old = text?.querySelector('.banner-text .act')
    if (text) {
      if (old) {
        old.className = ''
      }
      text.children[e].className = 'act'
    }
  };

  handleClick(num)


  return (
    <center className='main allweight'>
      <div className='banner' >
        <ul className='banner-display' ref={bannerref}>
          <li><img src={ban1} alt="" /></li>
          <li><img src={ban2} alt="" /></li>
          <li><img src={ban3} alt="" /></li>
          <li><img src={ban4} alt="" /></li>
        </ul>
        <div className='banner-text'>
          <ul ref={textref}>
            <li className='act'>永恒水手月亮</li>
            <li>朵莉亚连招</li>
            <li>全国大赛外卡</li>
            <li>女子赛收官</li>
          </ul>
        </div>
      </div>
      <div className='text'>
        <ul className='text-title'>
          <li className='hot'><a title="热门" >热门</a></li>
          <li className='new'><a title="新闻" >新闻</a></li>
          <li ><a title="公告" >公告</a></li>
          <li ><a title="活动" >活动</a></li>
          <li ><a title="赛事" >赛事</a></li>
          <li ><a title="赛事" >...</a></li>
        </ul>
        <div className='text-des-display'>
          <div className='text-des-vision'>
            <ul className='text-des'>
              <li className='text-des-frist'><a href="">12月1日体验服停机更新公告</a></li>
              <li><a href="">12月1日魔法球打折活动延期说明</a><em>11/08</em></li>
              <li><a href="">朵莉亚连招小技巧方案讨论开启</a><em>11/08</em></li>
              <li><a href="">共创策划周4周年纪念头像框票选结果公布【互动小任务第24期】</a><em>11/08</em></li>
              <li><a href="">大小姐驾到！《王者荣耀》x《元梦之星》超萌联动开启</a><em>11/08</em></li>
              <li><a href="">体验服活动限时开启！体验服点券免费送！</a><em>11/08</em></li>
              <li><a href="">12月1日体验服停机更新公告</a><em>11/08</em></li>
              <li><a href="">朵莉亚连招小技巧方案讨论开启</a><em>11/08</em></li>
            </ul>
            <ul className='text-des'>
              <li className='text-des-frist'><a href="">1月1日体验服停机更新公告</a></li>
              <li><a href="">12月1日魔法球打折活动延期说明</a><em>11/08</em></li>
              <li><a href="">朵莉亚连招小技巧方案讨论开启</a><em>11/08</em></li>
              <li><a href="">共创策划周4周年纪念头像框票选结果公布【互动小任务第24期】</a><em>11/08</em></li>
              <li><a href="">大小姐驾到！《王者荣耀》x《元梦之星》超萌联动开启</a><em>11/08</em></li>
              <li><a href="">体验服活动限时开启！体验服点券免费送！</a><em>11/08</em></li>
              <li><a href="">12月1日体验服停机更新公告</a><em>11/08</em></li>
              <li><a href="">朵莉亚连招小技巧方案讨论开启</a><em>11/08</em></li>
            </ul>
            <ul className='text-des'>
              <li className='text-des-frist'><a href="">2月1日体验服停机更新公告</a></li>
              <li><a href="">12月1日魔法球打折活动延期说明</a><em>11/08</em></li>
              <li><a href="">朵莉亚连招小技巧方案讨论开启</a><em>11/08</em></li>
              <li><a href="">共创策划周4周年纪念头像框票选结果公布【互动小任务第24期】</a><em>11/08</em></li>
              <li><a href="">大小姐驾到！《王者荣耀》x《元梦之星》超萌联动开启</a><em>11/08</em></li>
              <li><a href="">体验服活动限时开启！体验服点券免费送！</a><em>11/08</em></li>
              <li><a href="">12月1日体验服停机更新公告</a><em>11/08</em></li>
              <li><a href="">朵莉亚连招小技巧方案讨论开启</a><em>11/08</em></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='dow'>
        <a href="" className='down mianright'></a>
        <a href="" className='vs mianright'></a>
        <a href="" className='exp mianright'></a>
      </div>

    </center>
  )
}