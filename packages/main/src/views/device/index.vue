<template>
    <a-space direction="vertical" size="medium">
        <div class="title">
            <a-typography>
                <a-typography-title :heading="6" bold>
                    琴房设备
                </a-typography-title>
            </a-typography>
        </div>
        <div class="search">
            <span class="rule">
                <span class="owner">
                    <a-typography-text type="secondary" class="name">
                        主人姓名
                    </a-typography-text>
                    <a-space class="input">
                        <a-input placeholder="请输入姓名" allow-clear />
                    </a-space>
                </span>
                <span class="type">
                    <a-typography-text type="secondary" class="name">
                        设备类型
                    </a-typography-text>
                    <a-space class="select">
                        <a-select placeholder="全部">
                            <a-option>乐器</a-option>
                            <a-option>音箱</a-option>
                            <a-option>话筒</a-option>
                        </a-select>
                    </a-space>
                </span>
                <span class="device">
                    <a-typography-text type="secondary">
                        设备名称
                    </a-typography-text>
                    <a-space class="input">
                        <a-input placeholder="请输入设备名称" allow-clear />
                    </a-space>
                </span>
            </span>
            <span class="search">
                <a-button type="primary" icon-search>查询</a-button>
                <a-button icon->重置</a-button>
            </span>
        </div>
    </a-space>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
    .title {
        width: 64px;
        height: 24px;
    }

    .search {
        width: 1140px;
        height: 52px;

        .rule {
            width: 917px;
            height: 52px;

            .owner {
                width: 290px;
                height: 52px;

                .name{
                    width: 56px;
                    height: 22px;
                }

                .input {
                    width: 210px;
                    height: 32px;
                    background: #f2f3f5;
                    border-radius: 2px;}
            }

            .type {
                width: 290px;
                height: 52px;
                
                .name {
                    width: 56px;
                    height: 22px;
                }

                .select {
                    width: 210px;
                    height: 32px;
                    background: #f2f3f0;
                    border-radius: 2px;
                }
            }

            .device {
                width: 290px;
                height: 52px;
            
                .input {
                    width: 210px;
                    height: 32px;
                    background: #f2f3f5;
                    border-radius: 2px;
                }
            }
        }
    }
</style>