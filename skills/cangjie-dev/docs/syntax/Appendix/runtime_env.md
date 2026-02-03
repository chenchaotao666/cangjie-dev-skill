# runtime 环境变量使用手册

本节介绍 `runtime`（运行时）所提供的环境变量。

在 Linux shell 与 macOS shell 中，可以使用以下方式设置仓颉运行时提供的环境变量：

```shell
$ export VARIABLE=value
```

在 Windows cmd 中，可以使用以下方式设置仓颉运行时提供的环境变量：

```shell
> set VARIABLE=value
```

本节后续的示例均为 Linux shell 中的设置方式，若与运行平台不符，请根据运行平台选择合适的环境变量设置方式。

## runtime 初始化可选配置

注意：

1. 所有整型参数为 Int64 类型，浮点型参数为 Float64 类型;
2. 所有参数如果未显式规定最大值，默认隐式最大值为该类型最大值;
3. 所有参数若超出范围则设置无效，自动使用默认值。

### `cjHeapSize`

指定仓颉堆的最大值，支持单位为 kb（KB）、mb（MB）、gb（GB），支持设置范围为[4MB, 系统物理内存]，超出范围的设置无效，仍旧使用默认值。若物理内存低于 1GB，默认值为 64 MB，否则为 256 MB。

例如：

```shell
export cjHeapSize=4GB
```

### `cjRegionSize`

指定 region 分配器 thread local buffer 的大小，支持单位为 kb（KB）、mb（MB）、gb（GB)，支持设置范围为[4kb, 2048kb]，超出范围的设置无效，仍旧使用默认值。默认值为 64 KB。

例如：

```shell
export cjRegionSize=1024kb
```

### `cjLargeThresholdSize`

需要大量连续内存空间的对象（例如长数组）称为大对象。堆内频繁分配大对象可能导致堆内连续空间不足，从而触发堆溢出问题。通过增加大对象的最大值，可以提升堆内空间的连续性。

在仓颉语言中，大对象的阈值为 `cjLargeThresholdSize` 和 `cjRegionSize` 的较小者。`cjLargeThresholdSize` 支持的单位有 kb（KB）、mb（MB）、gb（GB)，支持的范围是 [4KB, 2048KB]，超出范围的设置无效，仍旧使用默认值。默认值为 32 KB。

> **说明：**
>
> 较大的大对象阈值可能影响程序性能，开发者可根据实际情况设置。

例如：

```shell
export cjLargeThresholdSize=1024kb
```

### `cjExemptionThreshold`

指定存活 region 的水线值，取值 (0,1]，该值与 region 的大小相乘，若 region 中存活对象的大小大于相乘后的值，则该 region 不会被回收（其中死亡对象继续占用内存）。该值指定得越大，region 被回收的概率越大，堆中的碎片空间就越少，但频繁回收 region 也会影响性能。超出范围的设置无效，仍旧使用默认值。默认值为 0.8，即 80%。

例如：

```shell
export cjExemptionThreshold=0.8
```

### `cjHeapUtilization`

指定仓颉堆的利用率，该参数用于 GC 后更新堆水线的参考依据之一，取值 (0, 1]，堆水线是指当堆中对象总大小达到水线值时则进行 GC。该参数指定越小，则更新后的堆水线会越高，则触发 GC 的概率会相对变低。超出范围的设置无效，仍旧使用默认值。默认值为 0.8，即 80%。

例如：

```shell
export cjHeapUtilization=0.8
```

### `cjHeapGrowth`

指定仓颉堆的增长率，该参数用于 GC 后更新堆水线的参考依据之一，取值必须大于 0。增长率的计算方式为 1 + cjHeapGrowth。该参数指定越大，则更新后的堆水线会越高，则触发 GC 的概率会相对变低。默认值为 0.15，表示增长率为 1.15。

例如：

```shell
export cjHeapGrowth=0.15
```

### `cjAlloctionRate`

指定仓颉运行时分配对象的速率，该值必须大于 0，单位为 MB/s，表示每秒可分配对象的数量。默认值为 10240，表示每秒可分配 10240 MB 对象。

例如：

```shell
export cjAlloctionRate=10240
```

### `cjAlloctionWaitTime`

指定仓颉运行时分配对象时的等待时间，该值必须大于 0，支持单位为 s、ms、us、ns，推荐单位为纳秒（ns）。若本次分配对象距离上一次分配对象的时间间隔小于此值，则将等待。默认值为 1000 ns。

例如：

```shell
export cjAlloctionWaitTime=1000ns
```

### `cjGCThreshold`

指定仓颉堆的参考水线值，支持单位为 kb（KB）、mb（MB）、gb（GB）, 取值必须为大于 0 的整数。当仓颉堆大小超过该值时，触发 GC。默认值为堆大小。

例如：

```shell
export cjGCThreshold=20480KB
```

### `cjGarbageThreshold`

当 GC 发生时，如果 region 中死亡对象所占比率大于此环境变量，此 region 会被放入回收候选集中，后续可被回收（如果受到其他策略影响也可能不被回收），默认值为 0.5，无量纲，支持设置的区间为[0.0, 1.0]。

例如：

```shell
export cjGarbageThreshold=0.5
```

### `cjGCInterval`

指定两次 GC 的间隔时间值，取值必须大于 0，支持单位为 s、ms、us、ns，推荐单位为毫秒（ms）。若本次 GC 距离上次 GC 的间隔小于此值，则本次 GC 将被忽略。该参数可以控制 GC 的频率。默认值为 150 ms。

例如：

```shell
export cjGCInterval=150ms
```

### `cjBackupGCInterval`

指定 backup GC 的间隔值，取值必须大于 0，支持单位为 s、ms、us、ns，推荐单位为秒（s），当仓颉运行时在该参数设定时间内未触发 GC，则触发一次 backup GC。默认值为 240 秒，即 4 分钟。

例如：

```shell
export cjBackupGCInterval=240s
```

### `cjProcessorNum`

指定仓颉线程的最大并发数，支持设置范围为 (0, CPU 核数 * 2]，超出范围的设置无效，仍旧使用默认值。调用系统 API 获取 cpu 核数，若成功默认值为 cpu 核数，否则默认值为 8。

例如：

```shell
export cjProcessorNum=2
```

### `cjStackSize`

指定仓颉线程的栈大小，支持单位为 kb（KB）、mb（MB）、gb（GB），支持设置范围为 Linux 平台下[64KB, 1GB]，Windows 平台下[128KB, 1GB]，超出范围的设置无效，仍旧使用默认值。默认值为 128KB。

例如：

```shell
export cjStackSize=100kb
```

### 运维日志可选配置

#### `MRT_LOG_FILE_SIZE`

指定 runtime 运维日志的文件大小，默认值为 10 MB，支持单位为 kb（KB）、mb（MB）、gb（GB），设置值需大于 0。

日志大小超过该值时，会重新回到日志开头进行打印。

最终生成日志大小略大于 MRT_LOG_FILE_SIZE。

例如：

```shell
export MRT_LOG_FILE_SIZE=100kb
```

#### `MRT_LOG_PATH`

指定 runtime 运维日志的输出路径，若该环境变量未设置或路径设置失败，则运维日志默认打印到 stdout（标准输出）或 stderr（标准错误）中。

例如：

```shell
export MRT_LOG_PATH=/home/cangjie/runtime/runtime_log.txt
```

#### `MRT_LOG_LEVEL`

指定 runtime 运维日志的最小输出级别，大于等于这个级别的日志会被打印，默认值为 e，支持设置值为[v|d|i|w|e|f|s]。v（VERBOSE）、d（DEBUGY）、i（INFO）、w（WARNING）、e（ERROR）、f（FATAL）、s（FATAL_WITHOUT_ABORT）。

例如：

```shell
export MRT_LOG_LEVEL=v
```

#### `MRT_REPORT`

指定 runtime GC 日志的输出路径，若该环境变量未设置或路径设置失败，该日志默认不打印。

例如：

```shell
export MRT_REPORT=/home/cangjie/runtime/gc_log.txt
```

#### `MRT_LOG_CJTHREAD`

指定 cjthread 日志的输出路径，若该环境变量未设置或路径设置失败，该日志默认不打印。

例如：

```shell
export MRT_LOG_CJTHREAD=/home/cangjie/runtime/cjthread_log.txt
```

#### `cjHeapDumpOnOOM`

指定是否要在发生堆溢出后输出堆快照文件，默认不开启。支持设置值为[on|off]，设定为 on 时开启功能，设定 off 或者其他值不开启功能。

例如：

```shell
export cjHeapDumpOnOOM=on
```

#### `cjHeapDumpLog`

指定输出堆快照文件的路径。注意指定的路径必须存在，且应用执行者对其具有读写权限。如果不指定，堆快照文件将输出到当前执行目录。

例如：

```shell
export cjHeapDumpLog=/home/cangjie
```

### 运行环境可选配置

#### `MRT_STACK_CHECK`

开启 native stack overflow 检查，默认不开启，支持设置值为 1、true、TRUE 开启功能。

例如：

```shell
export MRT_STACK_CHECK=true
```

#### `CJ_SOF_SIZE`

当 StackOverflowError 发生时，将自动进行异常栈折叠方便用户阅读，折叠后栈帧层数默认值是 32。可以通过配置此环境变量控制折叠栈长度，支持设置为 int 范围内的整数。
CJ_SOF_SIZE = 0，打印所有调用栈；
CJ_SOF_SIZE < 0，从栈底开始打印环境变量配置层数；
CJ_SOF_SIZE > 0，从栈顶开始打印环境变量配置层数；
CJ_SOF_SIZE 未配置，默认打印栈顶开始 32 层调用栈；

例如：

```shell
export CJ_SOF_SIZE=30
```
