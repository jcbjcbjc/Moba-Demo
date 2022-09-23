import { Vec2, Rect, Quat, Vec3 } from "cc";
import { NetConfig } from "../Network/NetConfig";
import { DataManager } from "../Managers/DataManager";

export class MathUtil{
    
   /**数组根据数组对象中的某个属性值进行排序的方法 
     * 使用例子：newArray.sort(sortBy('number',false)) //表示根据number属性降序排列;若第二个参数不传递，默认表示升序排序
     * @param attr 排序的属性 如number属性
     * @param rev true表示升序排列，false降序排序
     * */
    public static sortBy(attr:any, rev:any){
        //第二个参数没有传递 默认升序排列
        if(rev ==  undefined){
            rev = 1;
        }else{
            rev = (rev) ? 1 : -1;
        }
        
        return function(a:any, b:any){
            a = a[attr];
            b = b[attr];
            if(a < b){
                return rev * -1;
            }
            if(a > b){
                return rev * 1;
            }
            return 0;
        }
    }

    /**
     * 获取角度
     * @param x 
     * @param y 
     */
    public static GetAngle(x:number, y:number):number {
        let hd = Math.atan2(y, x);
        let angle = hd * 180 / (Math.PI);
        return angle;
    }

    /**
     * 计算两点之间的距离
     * @param startX 
     * @param startY 
     * @param endX 
     * @param endY 
     */
    public static GetDistance(startX:number, startY:number, endX:number, endY:number):number {
        let xLen=Math.abs(endX-startX);
        let yLen=Math.abs(endY-startY);
        // console.log('startX:'+startX+'====startY:'+startY+'====endX:'+endX+'====endY:'+ endY+'===xLen:'+xLen+'===='+yLen+'===='+((xLen*xLen)+(yLen*yLen)))
        return Math.sqrt(xLen*xLen+yLen*yLen);
    }


       /**
      * 算出旋转后方向向量
      */
     public static rotateVec3(q: Quat, v: Vec3, dest: Vec3 | null = null): Vec3 {
        if (dest === null) dest = new Vec3();
    
        const qx = q.x,
    
          qy = q.y,
    
          qz = q.z,
    
          qw = q.w;
    
        const x = v.x,
    
          y = v.y,
    
          z = v.z;
    
        const ix = x * qw + qy * z - qz * y,
    
          iy = y * qw + qz * x - qx * z,
    
          iz = z * qw + qx * y - qy * x,
    
          iw = -qx * x - qy * y - qz * z;
    
        dest.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
    
        dest.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
    
        dest.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;
    
        return dest;
    
      }

      /**
       * 判断点是否在矩形区域中
       * @param point
       * @param rect 
       */
      public static vec2InRect(point:Vec2,rect:Rect):boolean{
         return rect.contains(point);
      }
     
      /**
       * 插值
       * @param fromVec3 
       * @param toVec3  
       * @param dt  update执行时间间隔
       * @param se  完成时间
	   * @param getVec3Flag  返回Vec3的变量类型 1:from Vec3  2:to Vec3  3:创建一个Vec3
       */
      public static lerp(fromVec3:Vec3, toVec3:Vec3, dt:number, se:number, getVec3Flag:number = 1):Vec3{
          let xv = this.lerpV(fromVec3.x, toVec3.x, dt, se);
          let yv = this.lerpV(fromVec3.y, toVec3.y, dt, se);
          let zv = this.lerpV(fromVec3.z, toVec3.z, dt, se);
		//   console.log('xv='+xv+'，yv='+yv+'，zv='+zv+'，se='+se+'，dt='+dt)
		if(getVec3Flag == 1){
		  fromVec3.set(fromVec3.x+xv, fromVec3.y+yv, fromVec3.z+zv);
          return fromVec3;
		}else if(getVec3Flag == 2){
		  toVec3.set(toVec3.x+xv, toVec3.y+yv, toVec3.z+zv);
		  return toVec3;
		}else{
		  return new Vec3(xv, yv, zv);
		}
      }

      /**
       * 计算插值距离
       * @param fromV 
       * @param toV 
       * @param dt 
       * @param se 
       */
      private static lerpV(fromV:number, toV:number, dt:number, se:number){
        if(fromV == toV){
          return 0;
        }
        let zf = -1;
        if(toV > fromV){  //计算正负系数
            zf = 1;
        }
        let jl = Math.abs(toV - fromV)/se*dt;  //移动的距离
        let syJl=Math.abs(toV - fromV);  //剩余距离
        if(syJl < jl){
          jl = syJl;
        }
        let v = zf * jl;
        return v;
      }
      
      /**
       * 秒转逻辑帧
       * @param second 秒
       */
      public static secondToFrame(second:number):number{
          return Math.floor(second * 1000 / NetConfig.frameTime);
      }


  /// <summary>
	/// 长度平方
	/// </summary>
	public static sqrMagnitude(t:Vec3, obj:Vec3):number{
		let dx = Math.abs(t.x - obj.x);
		let dy = Math.abs(t.z - obj.z);
		return dx * dx + dy * dy;
  } 

  /// <summary>
	/// 长度平方
	/// </summary>
	public static sqrMagnitude2(pointX:number, pointY:number, circleX:number, circleY:number):number{
		let dx = Math.abs(circleX - pointX);
		let dy = Math.abs(circleY - pointY);
		return dx * dx + dy * dy;
  } 
  
  /**
   * 两个向量相减
   * @param a 
   * @param b 
   */
  public static vec2Subtract(a:Vec3, b:Vec3){
    return new Vec3 (a.x - b.x , 0, a.z - b.z);
  } 

  /// <summary>
	/// 返回0~359的角度值
	/// </summary>
	public static Angle(a:Vec3):number{
    let hd = Math.atan2(a.z, a.x);
    let angle = hd * 180 / (Math.PI);
    if(angle < 0){
      angle=angle+360;
    }else if(angle > 360){
      angle=angle-360;
    }
		return Math.floor(angle);
	}

    //点和圆碰撞
	public static CollidePointAndCircle(_p:Vec3, _c:Vec3, _radius:number): boolean{
		let sprRadius = _radius * _radius;
		let sqrDistance = MathUtil.sqrMagnitude(_c, _p);
		return sqrDistance < sprRadius;
  }
   //点和圆碰撞
	public static CollidePointAndCircle2(pointX:number, pointY:number, circleX:number, circleY:number, _radius:number): boolean{
		let sprRadius = _radius * _radius;
		let sqrDistance = MathUtil.sqrMagnitude2(pointX, pointY, circleX, circleY);
		return sqrDistance < sprRadius;
  }
  
  /// <summary>
	/// 
	///	点和圆的碰撞,圆不动修正点的位置
	/// </summary>
	/// <returns><c>true</c>, if point and circle was collided, <c>false</c> otherwise.</returns>
	/// <param name="_p">碰撞点.</param>
	/// <param name="_c">碰撞圆心.</param>
	/// <param name="_radius">圆半径.</param>
	/// <param name="_amend">修正值.</param>
	/// 
	public static CollidePointAndCircleRevise(_p:Vec3,_c:Vec3,  _radius:number, _amend:Vec3):boolean{
		_amend.set(0, 0, 0);
		//Debug.Log("障碍的半径是 " + _amend);
		let sprRadius = _radius * _radius;

		let sqrDistance = MathUtil.sqrMagnitude(_c, _p); // -c.x --p.x平方  =  -c.z --p.z

		if (sqrDistance >= sprRadius) { // 没有碰撞
			// console.log('没有碰撞sqrDistance='+sqrDistance+'，sprRadius='+sprRadius)
			return false;
		}
		// console.log('碰撞了')

		let distance = Math.floor(Math.sqrt(sqrDistance));
		let _angle = MathUtil.Angle(MathUtil.vec2Subtract(_p , _c));
    let amendDis = 1 + (_radius - distance)/100;
    let rockerSpeedVo = DataManager.Instance.rockerSpeeds[_angle];
    _amend.set(amendDis * rockerSpeedVo.x, 0, amendDis * rockerSpeedVo.y);
		return true;
  }

  /// <summary>
	/// 圆和圆的碰撞,圆2不动,修正是的是圆1的位置
	/// </summary>
	/// <returns><c>true</c>, if circle and circle was collided, <c>false</c> otherwise.</returns>
	/// <param name="_c1">圆1的圆心.</param>
	/// <param name="_c2">圆2的圆心.</param>
	/// <param name="_radius1">圆1的半径.</param>
	/// <param name="_radius2">圆2的半径.</param>
	/// <param name="_amend">修正值.</param>
	public static CollideCircleAndCircleRevise(_c1:Vec3,_c2:Vec3,_radius1:number,_radius2:number,  _amend:Vec3):boolean{
		return MathUtil.CollidePointAndCircleRevise(_c1,_c2,(_radius1 + _radius2), _amend);  //  // 角色位置，  障碍位置， 角色半径，障碍半径。
	}
	/// <summary>
	/// 圆和圆的碰撞,2个圆的位置都修正
	/// </summary>
	/// <returns><c>true</c>, if circle and circle was collided, <c>false</c> otherwise.</returns>
	/// <param name="_c1">圆1的圆心.</param>
	/// <param name="_c2">圆2的圆心.</param>
	/// <param name="_radius1">圆1的半径.</param>
	/// <param name="_radius2">圆2的半径.</param>
	/// <param name="_amend1">圆1的修正值.</param>
	/// <param name="_amend2">圆2的修正值.</param>
	public static CollideCircleAndCircleRevise2(_c1:Vec3, _c2:Vec3, _radius1:number, _radius2:number, _amend1:Vec3, _amend2:Vec3):boolean{
		_amend1.set(0, 0, 0);
		_amend2.set(0, 0, 0);

		let radiusSum = _radius1 + _radius2;
		let sprRadius = radiusSum * radiusSum;

		let sqrDistance = MathUtil.sqrMagnitude(_c1, _c2);

		if (sqrDistance >= sprRadius) {
			return false;
		}

		let distance =  Math.floor(Math.sqrt(sqrDistance));
		let _angle = MathUtil.Angle(MathUtil.vec2Subtract(_c1 , _c2));
    let amendDis = 1 + Math.floor((radiusSum - distance) * 0.5)/100;
    
    let rockerSpeedVo = DataManager.Instance.rockerSpeeds[_angle];
    _amend1.set(amendDis * rockerSpeedVo.x, 0, amendDis * rockerSpeedVo.y);
    _amend2.set(-1 * _amend1.x, 0, -1 * _amend1.z);
		return true;
	}
  
  private static changeDir(dir:number):number
	{
		return (Math.PI * dir / 180.0);
	}
  /**
   * 圆形和旋转矩形碰撞， 带修正
   * @param _c1    圆坐标
   * @param _radius1 圆半径
   * @param _rCenter  矩形坐标
   * @param _half_w  矩形宽
   * @param _half_h  矩形高
   * @param  _amend 效正偏移
   * @param  _dir  旋转矩形角度
   */
	public static CollideCircleAndRectRotateRevise(_c1:Vec3, _radius1:number, _rCenter:Vec3, _half_w:number,  _half_h:number, _amend:Vec3,  _dir:number):boolean
{
	_amend.set(0, 0, 0);
		//Debug.Log("_dir   "  + _dir);
		let X = _rCenter.x * Math.cos(MathUtil.changeDir(_dir)) + _rCenter.z * Math.sin(MathUtil.changeDir(_dir));

		let Z = -_rCenter.x * Math.sin(MathUtil.changeDir(_dir)) + _rCenter.z * Math.cos(MathUtil.changeDir(_dir));

		//Debug.Log("x " + X);
		//Debug.Log("z " + Z);
		_rCenter.x = Math.floor(X);
		_rCenter.z = Math.floor(Z);
		X = _c1.x * Math.cos(MathUtil.changeDir(_dir)) + _c1.z * Math.sin(MathUtil.changeDir(_dir));

		Z = -_c1.x * Math.sin(MathUtil.changeDir(_dir)) + _c1.z * Math.cos(MathUtil.changeDir(_dir));

		_c1.x = Math.floor(X);
		_c1.z = Math.floor(Z);

		/*
			*l:左
			*r:右
			*t:上/顶
			*b:下/底
		*/
		let llx = _rCenter.x - _half_w - _radius1;
		if (_c1.x <= llx)
		{
			return false;
		}

		let bby = _rCenter.z - _half_h - _radius1;
		if (_c1.z <= bby)
		{
			return false;
		}

		let rrx = _rCenter.x + _half_w + _radius1;
		if (_c1.x >= rrx)
		{
			return false;
		}

		let tty = _rCenter.z + _half_h + _radius1;
		if (_c1.z >= tty)
		{
			return false;
		}

		let lx = _rCenter.x - _half_w;
		let by = _rCenter.z - _half_h;
		let rx = _rCenter.x + _half_w;
		let ty = _rCenter.z + _half_h;

		if (_c1.x <= lx)
		{
			if (_c1.z > ty)
			{
				//左上角的顶点矩形里
				let _ltPoint = new Vec3(lx, 0, ty);
				return MathUtil.CollidePointAndCircleRevise(_c1, _ltPoint, _radius1, _amend);
			}
			else if (_c1.z < by)
			{
				//左下角的顶点矩形里
				let _lbPoint = new Vec3(lx, 0, by);
				return MathUtil.CollidePointAndCircleRevise(_c1, _lbPoint, _radius1, _amend);
			}
			else
			{
				//左侧矩形
				_amend.set(llx - _c1.x, 0, 0);
			}
		}
		else if (_c1.x >= rx)
		{
			if (_c1.z > ty)
			{
				//右上角的顶点矩形里
				let _rtPoint = new Vec3(rx, 0, ty);
				return MathUtil.CollidePointAndCircleRevise(_c1, _rtPoint, _radius1, _amend);
			}
			else if (_c1.z < by)
			{
				//右下角的顶点矩形里
				let _rbPoint = new Vec3(rx, 0, by);
				return MathUtil.CollidePointAndCircleRevise(_c1, _rbPoint, _radius1, _amend);
			}
			else
			{
				//右侧矩形
				_amend.set(rrx - _c1.x, 0, 0);
			}
		}
		else
		{
			if (_c1.z > ty)
			{
				//中上矩形
				_amend.set(0, 0, tty - _c1.z);
			}
			else if (_c1.z < by)
			{
				//中下矩形
				_amend.set(0, 0, bby - _c1.z);
			}
			else
			{
				//矩形内
				let _rtPoint = new Vec3(rx, 0, ty);
				let _rtAngle = MathUtil.Angle(MathUtil.vec2Subtract(_rtPoint , _rCenter));
				let _ltAngle = 180 - _rtAngle;
				let _lbAngle = 180 + _rtAngle;
				let _rbAngel = 360 - _rtAngle;

				let circleAngle = MathUtil.Angle(MathUtil.vec2Subtract(_c1 , _rCenter));//圆心和矩形中心的角度

				if (circleAngle > _rbAngel)
				{
					_amend.set(rrx - _c1.x, 0, 0);
				}
				else if (circleAngle > _lbAngle)
				{
					_amend.set(0, 0, bby - _c1.z);
				}
				else if (circleAngle > _ltAngle)
				{
					_amend.set(llx - _c1.x, 0, 0);
				}
				else if (circleAngle > _rtAngle)
				{
					_amend.set(0, 0, tty - _c1.z);
				}
				else
				{
					_amend.set(rrx - _c1.x, 0, 0);
				}
			}
		}
		if (_amend.x != 0 && _amend.z != 0)
		{
			  X = _amend.x * Math.cos(MathUtil.changeDir(-_dir)  ) + _amend.z * Math.sin(MathUtil.changeDir(-_dir));

			  Z = -_amend.x * Math.sin(MathUtil.changeDir(-_dir)) +_amend.z * Math.cos(MathUtil.changeDir(-_dir));

			_amend.x = Math.floor(X);
			_amend.z = Math.floor(Z);
 

		}
		// _amend.x = -_amend.x;
		// _amend.z = -_amend.z;
		return true;
	}
}