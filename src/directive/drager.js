export default {
  bind(el, binding) {
    const oDiv = el;
    oDiv.onmousedown = function(e) {
      const browerWidth = document.documentElement.clientWidth || document.body.clientWidth;
      const browerHeight = document.documentElement.clientHeight || document.body.clientHeight;
      if (e.target !== el) {
        return;
      }
      /* 鼠标按下，计算当前元素距离可视区的距离*/
      const disX = e.clientX - oDiv.offsetLeft;
      const disY = e.clientY - oDiv.offsetTop;
      document.getElementById('hiddenMask').style.display = 'block';
      document.onmousemove = function(e) {
        /* 通过事件委托，计算移动的距离 */
        const l = e.clientX - disX;
        const t = e.clientY - disY;
        const draggingW = document.defaultView.getComputedStyle(oDiv, null).width;
        const draggingH = document.defaultView.getComputedStyle(oDiv, null).height;
        /* 移动当前元素  */
        if (l < 0) {
          oDiv.style.left = '0';
        } else if ((e.clientX - disX) > (browerWidth - parseInt(draggingW))) {
          oDiv.style.left = (browerWidth - parseInt(draggingW)) + 'px';
        } else {
          oDiv.style.left = l + 'px';
        }

        if (t < 0) {
          oDiv.style.top = '0';
        } else if ((e.clientY - disY) > (browerHeight - parseInt(draggingH))) {
          oDiv.style.top = (browerHeight - parseInt(draggingH)) + 'px';
        } else {
          oDiv.style.top = t + 'px';
        }

        /* 将此时的位置传出去*/
        binding.value({ x: e.pageX, y: e.pageY });
      };
      document.onmouseup = function(e) {
        document.onmousemove = null;
        document.onmouseup = null;
        document.getElementById('hiddenMask').style.display = 'none';
      };
    };
  }
};
