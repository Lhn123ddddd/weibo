<?php
    
    $span1 = '网信办要求取消所有涉明星艺人榜单';
    $span2 = '浅爱的KK生日快乐';
    $span3 = 'iphone13或将于9月13日发布';
    $span4 = '老人倒地身亡鸣笛司机应该负责吗';
    $span5 = '小学生捐书混入暑假作业';
    $span6 = '林心如工作室回应注销工作室';
    $span7 = '赵薇多连退出多家公司';
    $span8 = '我国疫情已得到有效控制';
    $span9 = '钱枫回应强奸事件';
    $span10 = '牛逼';
    
    header('Content-Type:application/json; charset=utf-8');

    $arr = array('span1'=>$span1,'span2'=>$span2,'span3'=>$span3,'span4'=>$span4,'span5'=>$span5,'span6'=>$span6,'span7'=>$span7,'span8'=>$span8,'span9'=>$span9,'span10'=>$span10,'num1'=>1,'num2'=>2,'num3'=>3,'num4'=>4,'num5'=>3,'num6'=>2,'num7'=>1,'num8'=>4,'num9'=>2,'num10'=>4);

    exit(json_encode($arr));

?>