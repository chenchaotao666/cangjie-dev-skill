# 将仓颉源码解析为 AST 对象示例

如下有一个类 Data：

```text
class Data {
    var a: Int32
    init(a_: Int32) {
        a = a_
    }
}
```

利用解析函数将上述代码解析为一个 Decl 对象，代码如下所示：

<!-- verify -->

```cangjie
import std.ast.*

main() {
    let input: Tokens = quote(
        class Data {
            var a: Int32
            init(a_: Int32) {
                a = a_
            }
        }
    )
    let decl = parseDecl(input) // 获取一个 Decl 声明节点
    var classDecl = match (decl as ClassDecl) { // decl 的具体类型为 ClassDecl, 将其进行类型转化。
        case Some(v) => v
        case None => throw Exception()
    }
    classDecl.dump()
}
```

运行结果：

```text
ClassDecl {
  -keyword: Token {
    value: "class"
    kind: CLASS
    pos: 5: 9
  }
  -identifier: Token {
    value: "Data"
    kind: IDENTIFIER
    pos: 5: 15
  }
  -body: Body {
    -decls: 0, VarDecl {
      -keyword: Token {
        value: "var"
        kind: VAR
        pos: 6: 13
      }
      -identifier: Token {
        value: "a"
        kind: IDENTIFIER
        pos: 6: 17
      }
      -declType: PrimitiveType {
        -keyword: Token {
          value: "Int32"
          kind: INT32
          pos: 6: 20
        }
      }
    }
    -decls: 1, FuncDecl {
      -keyword: Token {
        value: "init"
        kind: INIT
        pos: 7: 13
      }
      -identifier: Token {
        value: "init"
        kind: IDENTIFIER
        pos: 7: 13
      }
      -funcParams: 0, FuncParam {
        -identifier: Token {
          value: "a_"
          kind: IDENTIFIER
          pos: 7: 18
        }
        -colon: Token {
          value: ":"
          kind: COLON
          pos: 7: 20
        }
        -paramType: PrimitiveType {
          -keyword: Token {
            value: "Int32"
            kind: INT32
            pos: 7: 22
          }
        }
      }
      -block: Block {
        -nodes: 0, AssignExpr {
          -leftExpr: RefExpr {
            -identifier: Token {
              value: "a"
              kind: IDENTIFIER
              pos: 8: 17
            }
          }
          -assign: Token {
            value: "="
            kind: ASSIGN
            pos: 8: 19
          }
          -rightExpr: RefExpr {
            -identifier: Token {
              value: "a_"
              kind: IDENTIFIER
              pos: 8: 21
            }
          }
        }
      }
    }
  }
}
```
