```html
<tool-bar>
  <div toolbarItem>完成订单</div>
  <div toolbarItem>打车来接</div>
  <div toolbarItem>一口价</div>
  <div toolbarMore>
    更多
    <ng-template>
      <div toolbarItem>完成订单</div>
      <div toolbarItem>打车来接</div>
      <div toolbarItem>
        一口价
        <div toolbarDown></div>
      </div>
    </ng-template>
  </div>
</tool-bar>
```

在style.scss中引入

```scss
@import "~iwe7-toolbar/themes/iconfont.css";
```

