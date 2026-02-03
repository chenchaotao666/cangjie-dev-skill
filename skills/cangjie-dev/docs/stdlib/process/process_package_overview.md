# std.process

## 功能介绍

process 包主要提供 Process 进程操作接口，主要包括进程创建，标准流获取，进程等待，进程信息查询等。

本包提供多平台统一操控能力，目前支持 Linux 平台，macOS 平台，Windows 平台与 HarmonyOS 平台。

## API 列表

### 函数

|  函数名 | 功能  |
| ------------ | ------------ |
| [execute](./process_package_api/process_package_funcs.md#func-executestring-arraystring-path-mapstring-string-processredirect-processredirectprocessredirect-duration) | 根据输入参数创建并运行一个子进程，等待该子进程运行完毕并返回子进程退出状态。 |
| [executeWithOutput](./process_package_api/process_package_funcs.md#func-executewithoutputstring-arraystring-path-mapstring-string-processredirect-processredirect-processredirect) | 根据输入参数创建并运行一个子进程，等待该子进程运行完毕并返回子进程退出状态、标准输出和标准错误。 |
| [findProcess](./process_package_api/process_package_funcs.md#func-findprocessint64) | 根据输入进程 id 绑定一个进程实例。 |
| [launch](./process_package_api/process_package_funcs.md#func-launchstring-arraystring-path-mapstring-string-processredirect-processredirect-processredirect) | 根据输入参数创建并运行一个子进程，并返回一个子进程实例。 |

### 类

|  类名 | 功能  |
| ------------ | ------------ |
| [CurrentProcess <sup>(deprecated)</sup>](./process_package_api/process_package_classes.md#class-currentprocess-deprecated) | 此类为当前进程类，继承 `Process` 类，提供对当前进程操作相关功能。 |
| [Process](./process_package_api/process_package_classes.md#class-process) | 此类为进程类，提供进程操作相关功能。 |
| [SubProcess](./process_package_api/process_package_classes.md#class-subprocess) | 此类为子进程类，继承 `Process` 类，提供对子进程操作相关功能。 |

### 枚举

| 枚举名 | 功能 |
| --------------------------- | ------------------------ |
| [ProcessRedirect](./process_package_api/process_package_enums.md#enum-processredirect) | 用于在创建进程时设置子进程标准流的重定向模式。 |

### 异常类

| 异常类名 | 功能 |
| --------------------------- | ------------------------ |
| [ProcessException](./process_package_api/process_package_exceptions.md#class-processexception) | `process` 包的异常类。 |

### 兼容性说明

#### class Process

| 成员 |  支持平台 |
| ------------ | ------------ |
| [current <sup>(deprecated)</sup>](./process_package_api/process_package_classes.md#static-prop-current-deprecated) | `Linux` `Windows` `macOS` `HarmonyOS` |
| [pid](./process_package_api/process_package_classes.md#prop-pid) | `Linux` `Windows` `macOS` `HarmonyOS` |
| [name](./process_package_api/process_package_classes.md#prop-name) | `Linux` `Windows` `macOS` `HarmonyOS` |
| [command](./process_package_api/process_package_classes.md#prop-command) | `Linux` `Windows` `macOS` `HarmonyOS` |
| [arguments <sup>(deprecated)</sup>](./process_package_api/process_package_classes.md#prop-arguments-deprecated) | `Linux` `macOS` `HarmonyOS` |
| [commandLine <sup>(deprecated)</sup>](./process_package_api/process_package_classes.md#prop-commandLine-deprecated) | `Linux` `macOS` `HarmonyOS` |
| [environment <sup>(deprecated)</sup>](./process_package_api/process_package_classes.md#prop-environment-deprecated) | `Linux` `HarmonyOS` |
| [workingDirectory <sup>(deprecated)</sup>](./process_package_api/process_package_classes.md#prop-workingDirectory-deprecated) | `Linux` `macOS` `HarmonyOS` |
| [of(Int64) <sup>(deprecated)</sup>](./process_package_api/process_package_classes.md#static-func-ofint64-deprecated) | `Linux` `Windows` `macOS` `HarmonyOS` |
| [start(String, Array\<String>, Path, Map\<String, String>, ProcessRedirect, ProcessRedirect, ProcessRedirect) <sup>(deprecated)</sup>](./process_package_api/process_package_classes.md#static-func-startstring-arraystring-path-mapstring-string-processredirect-processredirect-processredirect-deprecated) | `Linux` `Windows` `macOS` `HarmonyOS` |
| [run(String, Array\<String>, Path, Map\<String, String>, ProcessRedirect, ProcessRedirect, ProcessRedirect, Duration) <sup>(deprecated)</sup>](./process_package_api/process_package_classes.md#static-func-runstring-arraystring-path-mapstring-string-processredirect-processredirectprocessredirect-duration-deprecated) | `Linux` `Windows` `macOS` `HarmonyOS` |
| [runOutput(String, Array\<String>, Path, Map\<String, String>, ProcessRedirect, ProcessRedirect, ProcessRedirect) <sup>(deprecated)</sup>](./process_package_api/process_package_classes.md#static-func-runoutputstring-arraystring-path-mapstring-string-processredirect-processredirect-processredirect-deprecated) | `Linux` `Windows` `macOS` `HarmonyOS` |
| [terminate(Bool)](./process_package_api/process_package_classes.md#func-terminatebool) | `Linux` `Windows` `macOS` `HarmonyOS` |

#### class CurrentProcss <sup>(deprecated)</sup>

> **注意：**
>
> 未来版本即将废弃，可在 std.env 中找到代替功能。

| 成员 |  支持平台 |
| ------------ | ------------ |
| [arguments](./process_package_api/process_package_classes.md#prop-arguments) | `Linux` `Windows` `macOS` `HarmonyOS` |
| [homeDirectory](./process_package_api/process_package_classes.md#prop-homeDirectory) | `Linux` `Windows` `macOS` |
| [tempDirectory](./process_package_api/process_package_classes.md#prop-tempDirectory) | `Linux` `Windows` `macOS` |
| [stdIn](./process_package_api/process_package_classes.md#prop-stdIn) | `Linux` `Windows` `macOS` `HarmonyOS` |
| [stdOut](./process_package_api/process_package_classes.md#prop-stdOut) | `Linux` `Windows` `macOS` `HarmonyOS` |
| [stdErr](./process_package_api/process_package_classes.md#prop-stdErr) | `Linux` `Windows` `macOS` `HarmonyOS` |
| [atExit(() -> Unit)](./process_package_api/process_package_classes.md#func-atexit---unit) | `Linux` `Windows` `macOS` `HarmonyOS` |
| [exit(Int64)](./process_package_api/process_package_classes.md#func-exitint64) | `Linux` `Windows` `macOS` `HarmonyOS` |
| [getEnv(String)](./process_package_api/process_package_classes.md#func-getenvstring) | `Linux` `Windows` `macOS` `HarmonyOS` |
| [removeEnv(String)](./process_package_api/process_package_classes.md#func-removeenvstring) | `Linux` `Windows` `macOS` `HarmonyOS` |
| [setEnv(String, String)](./process_package_api/process_package_classes.md#func-setenvstring-string) | `Linux` `Windows` `macOS` `HarmonyOS` |

#### class SubProcess

| 成员 |  支持平台 |
| ------------ | ------------ |
| [stdIn <sup>(deprecated)</sup>](./process_package_api/process_package_classes.md#prop-stdIn-deprecated) | `Linux` `Windows` `macOS` `HarmonyOS` |
| [stdInPipe](./process_package_api/process_package_classes.md#prop-stdinpipe) | `Linux` `Windows` `macOS` `HarmonyOS` |
| [stdOut <sup>(deprecated)</sup>](./process_package_api/process_package_classes.md#prop-stdOut-deprecated) | `Linux` `Windows` `macOS` `HarmonyOS` |
| [stdOutPipe](./process_package_api/process_package_classes.md#prop-stdoutpipe) | `Linux` `Windows` `macOS` `HarmonyOS` |
| [stdErr <sup>(deprecated)</sup>](./process_package_api/process_package_classes.md#prop-stdErr-deprecated) | `Linux` `Windows` `macOS` `HarmonyOS` |
| [stdErrPipe](./process_package_api/process_package_classes.md#prop-stderrpipe) | `Linux` `Windows` `macOS` `HarmonyOS` |
| [wait(Duration)](./process_package_api/process_package_classes.md#func-waitduration) | `Linux` `Windows` `macOS` `HarmonyOS` |
| [waitOutput()](./process_package_api/process_package_classes.md#func-waitoutput) | `Linux` `Windows` `macOS` `HarmonyOS` |
