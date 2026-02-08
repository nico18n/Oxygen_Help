const database = [
{
"id":"string_constants",
"members":"cr, crlf, tab, qu, spc, cm",
"use":"widely used string constants",
"example":"print 1 cm 2 cm 3 cr\n        print 1 tab 2 tab 3 cr\n        print qu \"helo\" qu  ' \"helo\"\n        'Others are easily created\n        def cln \":\"\n        ...",
"related":"space",
"group":"system macro"
},
{
"id":"types",
"members":"void, sbyte, ubyte, byte,\n        string, wstring, bstring, bstr, wbstring, char, wchar,\n        asciiz, zstring, wzstring,\n        short, wide, long,int, integer,float, double,\n        extended, quad, word, dword,\n        ulong, uint, qword, any, sys, boolean, bool",
"use":"to specify the types of variables and create them",
"example":"int x\ndim as int x\ndim x as int\nvar int x",
"related":"type, class, typedef, struct",
"group":"primitive types"
},
{
"id":"dimsyntax",
"members":"dim, as, ptr, *, at, global, static, local",
"incstring1":"\n'--------------\n'DIM VARIATIONS\n'==============\n\n  '----------------\n  'POST DEFINE TYPE\n  '================\n \n  dim i,j,k as long\n  \n  '---------------\n  'PRE DEFINE TYPE\n  '===============\n  \n  dim as long i,j,k\n  \n  '-----------\n  'MIXED TYPES\n  '===========\n\n\n  dim as long i,j,k, as string s,t\n\n\n  '----------\n  'MULTI LINE\n  '==========\n\n  dim as long i,j,k,\n      as string s,t\n\n\n  dim as long,\n  i,\n  j,\n  k\n\n  '--------------\n  'INITIAL VALUES\n  '==============\n  \n  dim as long,\n  i = 1,\n  j = 2,\n  k = 42\n  \n  '-------------------------\n  'SPREAD LINES AND COMMENTS\n  '=========================\n\n  dim as long,\n  \n  i = 1,  ' these can be spread over many lines\n  \n  '--------\n  j = 2,  ' with intervening comments\n  \n  '--------\n  \n  k = 42  '\n  \n  '--------------------\n  'MULTIPLE ASSIGNMENTS\n  '====================\n\n  dim as long a(10) => (2,4,6,8,10,12,42,99)  \n  '\n  print \"Answer: \"  str a(7)\n\n\n  '-----------------\n  'SYNTAX VARIATIONS\n  '=================\n\n  dim long a(10) => (2,4,6,8,10,12,42,99)  \n  dim long a[10] => (2,4,6,8,10,12,42,99)  \n  long a[10] => (2,4,6,8,10,12,42,99)  \n  long a[10] &#60;= (2,4,6,8,10,12,42,99)  \n  long a[10] = {2,4,6,8,10,12,42,99}\n  long a[] = {2,4,6,8,10,12,42,99}\n  long a = {2,4,6,8,10,12,42,99}\n\n  long a = \n  {\n    2,4,6,8,10,12,42,99\n  }\n\n\n  '------------------\n  'POINTERED VARIABLE\n  '==================\n\n  dim string s = \"ABCDEFGHIJ\"\n  dim byte b at strptr s\n  dim byte byref b : @b=strptr s\n  byte b at strptr s\n  byte *b = strptr s\n\n  'print b[7] '71 G\n\n\n  '--------------------\n  'USING DYNAMIC MEMORY\n  '====================\n\n  dim float f at getmemory 1024*4 : f={1.5, 2.5, 3.5}\n  'print f[2]\n  freememory @f 'release allocated memory\n\n\n  '---------------------------\n  'DIMS: GLOBAL, STATIC, LOCAL\n  '===========================\n\n  global int g=1 'visible to rest of program following this statement\n\n  function f(p as int) as int\n    static int s=0 'permanent storage\n    local int l=100 'temporary storage\n    s+=10\n    return p+l+s+g\n  end function\n\n  'print f(1000) '1111\n  'print f(1000) '1121\n\n\n\n  '--------------\n  'LIMITING SCOPE\n  '==============\n\n  dim long a=16\n  scope\n    dim long a=1\n    'print a '1\n    ...\n  end scope\n  'print a '16\n  ",
"remarks":"C style instantiations is a simpler alternative to using 'Dim'.\n\nWhen autodim is active (by default), variables can be automatically \ninstantiated unless they are arrays or referenced (byref) variables.",
"related":"global, local, static",
"group":"variables"
},
{
"id":"structures",
"members":"type, class, typedef, struct",
"use":"specify compund structure for variables",
"incstring1":"\n'--------------\n'COMPOUND TYPES\n'==============\n\n  type color32\n  \n    r as byte\n    g as byte\n    b as byte\n    a as byte\n    =\n    rgba as long  'UNION\n    \n  end type\n\n'-------------\n'DERIVED TYPE:\n'=============\n  \n  type colortext\n  \n    txt as string\n    c as color32\n    \n  end type\n\n  \n  \n  dim t as colortext\n  \n  t.txt=`Color code `\n  t.c.r=08  '0x08\n  t.c.g=16  '0x10 \n  t.c.b=32  '0x20\n  t.c.a=64  '0x40\n  \n  print t.txt hex t.c.rgba\n\n\n'print \"STRUCTURE:\n'\" structureof color32\n\n\n'-----------------\n'SYNTAX VARIATIONS\n'=================\n\n  type color32\n    byte r\n    byte g\n    byte b\n    byte a\n    =\n    long rgba  'UNION    \n  end type\n\n\n  type color32\n    byte r,g,b,a\n    =\n    long rgba  'UNION    \n  end type \n\n\n  type color32 byte r,g,b,a = long rgba\n\n  type colortext string txt,color32 c\n\n  struct color32 { \n    byte r,g,b,a\n   =\n   long rgba\n  }\n\n  typedef struct _color32 { \n    byte r,g,b,a\n   =\n   long rgba\n  } color32, *pcolor32\n\n  typedef struct _color32 {\n    union { \n      struct {\n        byte r,g,b,a\n      }\n      long rgba\n    }  \n  } color32, *pcolor32\n\n\n\n  '#recordof color32\n  '#recordof _color32\n  '#recordof colortext\n ",
"group":"types"
},
{
"id":"includes",
"members":"use, uses, using, once",
"group":"keywords"
},
{
"id":"equates",
"members":"%, $",
"incstring1":"\n'$filename \"t.exe\"\n'uses rtl64\n\n'---------------\n'EQUATES: $ or %\n'===============\n\n'strictly speaking these are single-line macros\n\n  % a   = 1\n  % b   = 2\n\n  %c      3\n  % c     3\n  %c    = 3\n\n  \n  $d      4     \n  $d      \"four\"\n  %d      \"four\"\n\n  %= e    b * c 'precalcuate e value '6\n  '#recordof e\n\n  % f     8\n  %% f    7  'default value 7 (unless previously defined)\n\n  %sp     \" \"\n  %cm     \",\"\n  \n  \n  '$ % prefixes and suffixes are ignored\n  \n  print \"\" a cm b cm c cm d cm e cm f '1,2,3,four,6,8\n  'print %a cm %b cm %c cm %d cm %e cm f\n\n\n  'INCLUDING ARGUMENTS\n  \n  'arguments are represented by %1 .. %9\n  \n  % display \"value of %1: \" %1\n\n  print display d\n       ",
"remarks":"$ and % are equivalent",
"related":"def, #def, macro, #define",
"group":"equates"
},
{
"id":"arrays",
"members":"dim, redim",
"incstring1":"  '% filename \"t.exe\"\n  'uses rtl64\n\n  '-------------\n  'STATIC ARRAYS\n  '=============\n\n  dim as long a(10)={2,4,6,8,10,12}\n  a(10)=a(1)+a(4)\n\n  print a(10)\n\n\n  '--------------\n  'DYNAMIC ARRAYS\n  '==============\n\n  dim as long a at getmemory(10*sizeof(long)) : a={2,4,6,8,10,12}\n  ...\n  freememory @a\n\n  dim as long a(10)={2,4,6,8,10,12}\n\n\n  '--------\n  'OVERLAYS\n  '========\n  dim as string s = \"ABCDEFGHIJ\"\n  dim as byte b at strptr(s)\n  print str(b[3]) \":  \" chr(b[3])\n  \n\n\n  '-----------------------\n  'MULTIDIMENSIONAL ARRAYS\n  '=======================\n\n  macro a(x,y) av(y*1024+x)\n  dim int av[1024*1024]\n\n  a(100,200)=42\n  print a(100,200) ;42\n\n\n  '----------\n  'INDEX BASE\n  '==========\n  '\n  dim int a[100]={10,20,30,40}\n  indexbase 1 'default: first element is indexed as 1\n  'print a[2] '20\n  indexbase 0\n  print a[2] '30\n\n\n  '-------------\n  'PSEUDO ARRAYS\n  '=============\n\n  dim as int av[100]\n\n  function a(int i,v) 'setter\n    i*=2\n    av[i]=v\n  end function\n  \n  function a(int i) as int 'getter\n    i*=2\n    return av[i]\n  end function\n\n  a(7)=42 'this is interpreted as a(7,42)\n  'print a(7)\n\n\n",
"group":"variables"
},
{
"id":"blocks",
"members":"scope, module, interface, namespace, o2, (",
"related":"procedures, macros",
"group":"blocks"
},
{
"id":"macros",
"members":"#define, def, deff, %, $",
"related":"macro__functions, macro__operators, procedures",
"group":"macros"
},
{
"id":"macro__operators",
"members":"init,free, conv, move, save, neg",
"action":"supports operation on compund types  ",
"use":"formulating expressions, in conjunction with higher operands",
"incstring1":"\n-----------------------\n'OPERATORS USING MACROS\n=======================\n\n'PARTIAL DEMO\n\n  type vector3f\n    float x,y,z\n  end type\n  '\n  macro vector3f_\"move\"(a,b)\n    a.x = b.x\n    a.y = b.y\n    a.z = b.z\n  end macro\n  macro vector3f_\"neg\"(acc,a)\n    acc.x = -a.x\n    acc.y = -a.y\n    acc.z = -a.z\n  end macro\n  macro vector3f_\"+\"(acc,a,b)\n    acc.x = a.x + b.x\n    acc.y = a.y + b.y\n    acc.z = a.z + b.z\n  end macro\n  macro vector3f_\"-\"(acc,a,b)\n    acc.x = a.x - b.x\n    acc.y = a.y - b.y\n    acc.z = a.z - b.z\n  end macro\n  macro vector3f_\"*\"(acc,a,b)\n    acc.x = a.x * b.x\n    acc.y = a.y * b.y\n    acc.z = a.z * b.z\n  end macro\n  macro vector3f_\"\/\"(acc,a,b)\n    acc.x = a.x \/ b.x\n    acc.y = a.y \/ b.y\n    acc.z = a.z \/ b.z\n  end macro\n\n'STR polymorph for vector3f\n'\nfunction str(vector3f *a) as string\n  string cm=\", \"\n  return str(a.x) cm str(a.y) cm str(a.z)\nend function\n\n\n'TESTS\n'\ndim vector3f A = {1,2,3}\ndim vector3f B = {10,20,30}\ndim vector3f C = {10,100,1000}\ndim vector3f D\n\n'#show D=C*(A+B)\n'print str(D)\n'print str(A)\n'print str(A+B)\n'print str(A*B)\n\nprint str(C*(A+B)) '110, 2200, 33000",
"related":"macros, macro__functions, operators",
"group":"structures"
},
{
"id":"procedures",
"members":"function, sub, procedure, method, subroutine",
"incstring1":"\n'----------\n'PROCEDURES\n'==========\n\n'SUBROUTINES\n\nfloat v\ngoto ncube\ncube: 'subroutine\n'print v*v*v\nret\nncube:\n\nv=3 : gosub cube\n\n\n'SUBS AND FUNCTIONS\n'==================\n\nsub cube(f as float, g as float)\n  g=f*f*f\nend sub\n\ndim float a\ncube 2,a\n'print a\n\nfunction cube(f as float) as float\n  function=f*f*f\nend function\n\nfunction cube(f as float) as float\n  return f*f*f\nend function\n\n'print cube 2\n\n'METHODS (IN CLASSES)\n'====================\n\nclass multipliers\n  method cube(f as float) as float\n    return f*f*f\n  end method\nend class\n\ndim multipliers m\n'print m.cube 4\n\n'ALTERNATIVE SYNTAX\n'==================\n\n'USE OF {..}\n'===========\n\nfunction cube(f as float) as float {return f*f*f}\n\nfunction cube(f as float) as float {\n  return f*f*f\n}\n\nfloat cube(f as float) {\n  return f*f*f\n}\n\nfloat cube(float f) {\n  return f*f*f\n}\n\n\n'print cube 2\n\n\n'PASSING PARAMETERS BY REFERENCE\n'===============================\n\ndim as float f()={1,2,3,4,5}\n\nfunction cubes(f as float, byval n as int) 'default byref\n  indexbase 1\n  int i\n  for i=1 to n\n    v=f[i]\n    print v*v*v\n  next\nend function\n\nfunction cubes(float*f, int n)\n  indexbase 1\n  float v\n  int i\n  for i=1 to n\n    v=f[i]\n    print v*v*v\n  next\nend function\n\n'cubes f(2),3\n'cubes f, countof(f)\n\n\n'OPTIONAL PARAMETERS\n'===================\n\nfunction cubes(f as float, optional byval n as int)\n  if n=0 then n=1\n  indexbase 1\n  float v\n  int i\n  for i=1 to n\n    v=f[i]\n    print v*v*v\n  next\nend function\n\n'cubes f(3)\n'cubes f(3),1\n'cubes float{1,2,3,4},countof  'PASSING LITERAL DATA SET\n\n\n'DEFAULT PARAMETERS\n'==================\n\nfunction cubes(float*f, int n=2)\n  indexbase 1\n  float v\n  int i\n  for i=1 to n\n    v=f[i]\n    print v*v*v\n  next\nend function\n\n'cubes f(3)\n'cubes f(3),2\n\n'ELLIPSIS ...\n'============\n\nfunction cuber(int n, ...)\n  indexbase 0\n  float v\n  int i\n  for i=1 to n\n    v= (int) param[i]\n    print v*v*v\n  next\nend function\n\n'cuber 3, 2,3,4\n\n\n",
"related":"macro",
"group":"procedures"
},
{
"id":"conditionals",
"members":"if, then, elseif,else, endif, while, wend",
"incstring1":"\n'------------\n'CONDITIONALS\n'============\n\n  string s\n  int a=1, b=2\n  \n  'SINGLE LINE FORMAT\n  \n  if a>b then s=\"A>B\" else s=\"A&#60;=B\"\n\n  'print s\n\n\n  'MULTI-LINE FORMAT\n  \n  if a>b then\n    s=\"A>B\"\n  elseif a=b then\n    s=\"A=B\"\n  else\n    s=\"A&#60;B\"\n  end if\n  \n\n'-----------------\n'SYNTAX VARIATIONS\n'=================\n\n  if (a>b) {s=\"A>B\"} elseif (a=b) {s=\"A=B\"} else {s=\"A&#60;B\"}\n\n  if a>b {s=\"A>B\"} elseif a=b {s=\"A=B\"} else {s=\"A&#60;B\"}\n\n  if a>b {\n    s=\"A>B\"\n  } elseif a=b {\n    s=\"A=B\"\n  } else {\n    s=\"A&#60;B\"\n  }\n\nprint \"A=1 B=2\n\" s\n       ",
"related":"selection, loops",
"group":"conditionals"
},
{
"id":"loops",
"members":"do, while, exit, continue, wend, enddo",
"incstring1":"\n'-----\n'LOOPS\n'=====\n\n  dim a,b,c,d as long, s as string\n\n\n  'SIMPLE LOOPS\n  '------------\n  \n  a=4\n  '\n  b=0\n  do\n    b+=1\n    if b>a then exit do\n  end do 'or enddo\n\n  b=0\n  do\n    b+=1\n    if b>a then exit do\n  loop\n\n  '-----------------\n  'CONDITIONAL FORMS\n  '=================\n  \n  b=0\n  while b&#60;=a\n    b+=1\n  end while ' or endwhile\n\n  b=0\n  while b&#60;=a\n    b+=1\n  wend\n\n  b=0\n  while b&#60;=a {b+=1}\n\n  b=0\n  do {b+=1} while b&#60;a\n\n  b=0\n  do {b+=1} until b>=a\n\n  b=0\n  do\n    b+=1\n  loop while b&#60;a\n\n  b=0\n  do\n    b+=1\n  loop until b>=a\n\n  b=0\n  do\n    b+=1\n    if b&#60;a then continue do\n    if b&#60;a then repeat do\n    if b>=a then exit do\n    if b>=a then break\n  loop\n\n  b=0\n  do\n    b+=1\n    continue while b&#60;a   'if\/when\/while\n    continue until b>=a\n    repeat until b>=a\n    redo until b>=a\n    redo until not b&#60;a\n    exit when b>=a      'if\/when\n    exit when not b&#60;a\n    break when b>=a     'if\/when\n  end do\n\n\n  print \"ok\"\n\n\n ",
"related":"iteration, conditionals",
"group":"loops"
},
{
"id":"iteration",
"members":"for, to, step, next",
"incstring1":"\n'---------\n'ITERATION\n'=========\n\n  dim a,b,c,d,i as long\n  dim s as string = \"QWERTY\"\n\n\n  'checksum example\n\n  b=0\n  for i=1 to len(s)\n    b+=asc(s,i)\n  next\n\n  b=0\n  for i=1 to len(s) step 1\n    b+=asc(s,i)\n  next\n\n  b=0\n  for i=len(s) to 1 step -1\n    b+=asc(s,i)\n  next\n\n\n'-----------------\n'SYNTAX VARIATIONS\n'=================\n\n\n  b=0\n  for i=1 to len(s) step 1 {\n    a=asc(s,i)\n    b+=a\n  }\n\n  'b=0\n  'for i=1,len(s), 1 {\n  '  a=asc(s,i)\n  '  b+=a\n  '}\n\n  b=0\n  for (i=1, i&#60;=len(s), i++) {\n    a=asc(s,i)\n    b+=a\n  }\n\n  b=0\n  for (i=1; i&#60;=len(s); i++) {\n    a=asc(s,i)\n    b+=a\n  }\n\n  b=0\n  for (i=1, i&#60;=len(s), i++) {\n    a=asc(s,i)\n    b+=a\n  }\n\n\n def qu \"'\"\n print \"Checksum for \" qu s qu \" = \" b\n\n\n\n\n  \n\n ",
"related":"loops",
"group":"iteration"
},
{
"id":"selection",
"members":"select, case, switch, endselect",
"incstring1":"\n\n'------\n'SELECT\n'======\n\n  dim a as long, s as string\n  \n  a=3\n\n  'COMPACT FORM\n  '------------\n  \n  select a 'select case a\n      \n  case 1 : s=\"A=1\"\n  case 2 : s=\"A=2\"\n  case 3 : s=\"A=3\"\n  case else : s=\"A>3\"\n      \n  end select\n\n\n  'GENERAL FORM\n  '------------\n  \n  select a\n      \n  case 1\n    s=\"A=1\"\n  case 2\n    s=\"A=2\"\n  case 3\n    s=\"A=3\"\n  case else\n    s=\"A>3\"\n      \n  end select\n\n\n'------------------\n'SYNTAX VARIATIONS\n'=================\n\n  select a {\n      \n  case 1\n    s=\"A=1\"\n  case 2\n    s=\"A=2\"\n  case 3\n    s=\"A=3\"\n  case else\n    s=\"A>3\"\n      \n  }\n\n  switch a {\n      \n  case 1\n    s=\"A=1\"\n    break\n  case 2\n    s=\"A=2\"\n    break\n  case 3\n    s=\"A=3\"\n    break\n  case else\n    s=\"A>3\"\n    break\n      \n  }\n\n\n  '----------\n  'EXTENSIONS\n  '==========\n\n  select a\n      \n  case 1\n    s=\"A=1\"\n  case 2\n    s=\"A=2\"\n  case 3\n    s=\"A=3\"\n  case 4,5,6\n    '\n  case 7 to 9\n    '\n  case 10 to &#60;20\n    '\n  case else\n    s=\"A>3\"\n      \n  end select\n\n\n\n\n\n  \n\n  print s",
"related":"conditionals",
"group":"case selection"
},
{
"id":"declarations",
"members":"declare, !, function, sub, procedure,\n        ptr, alias, lib, stdcall, cdecl, ms64, as,\n        export, extern, external, callback, link,\n        at, =, label, nosig",
"related":"procedures, types",
"group":"declaring procedures"
},
{
"id":"classes",
"same":"objects, OOP, Object Oriented Programming",
"members":"class, type, has, of, from, virtual, pure, com, new, del",
"incstring1":"\n'-------\n'CLASSES\n'=======\n\n\n'METHODS (IN CLASSES)\n'====================\n\nclass multipliers\n  method cube(f as float) as float\n    return f*f*f\n  end method\nend class\n\ndim multipliers m\n'print m.cube 4\n\n'ALTERNATIVE SYNTAX\n'==================\n\nclass multipliers {\n  method cube(f as float) as float {\n    return f*f*f\n  }\n}\n\ndim multipliers m\nprint m.cube 4",
"related":"structures",
"group":"classes"
},
{
"id":"operators",
"members":"and, or, xor, =, := ,+, -, *, \/,\n        \\, ^, +=, -=, *=, \/=, ==, !=,\n        <>, <, >, <=,>=, and=, or=, xor=,\n        &, |, &=, |=, &&, ||, ^^,\n        &&=, ||=, ^^=,\n        <<, >>, <<<, >>>",
"action":"changes the state of an accumulator  ",
"use":"formulating expressions, in conjunction with operands",
"example":"a*b+c\/4",
"remarks":"universal feature of maths and programming languages",
"related":"types",
"group":"operators"
},
{
"id":"calling_conventions",
"members":"stdcall, cdecl, ms64, pascal",
"action":"determines how parameters are passed on the stack, when making a call",
"related":"extern",
"group":"calling conventions",
"title":"calling conventions"
},
{
"id":"metakeywords",
"members":"#if, #elseif, #else, #endif,\n        #ifdef, #ifndef, defined, undefined,\n        match, leftmatch, rightmatch, anymatch",
"remarks":"generally for use inside macros",
"related":"typeof, typecodeof, def, macro ,$ ,%",
"group":"meta control",
"title":"meta keywords"
},
{
"id":"registers",
"members":"al, cl, dl, bl,\n        ah, ch, dh, bh,\n        ax, cx, dx, bx,\n        sp, bp, si, di,\n        eax, ecx, edx, ebx,\n        esp, ebp, esi, edi,\n        st0, st1, st2, st3, st4, st5, st6, st7,\n        mmx0, mmx1, mmx2, mmx3, mmx4, mmx5, mmx6, mmx7,\n        xmm0, xmm1, xmm2, xmm3, xmm4, xmm5, xmx6, xmm7,\n        xmm8, xmm9, xmm10, xmm11, xmm12, xmm13, xmm14, xmm15,\n        cr0, cr1, cr2, cr3, cr4,\n        dr0, dr1, dr2, dr3, dr4, dr5, dr6, dr7,\n        es, cs, ss, ds, fs, gs,\n        rax, rcx, rdx, rbx, rsp, rbp,, rsi, rdi,\n        r8, r9, r10, r11, r12, r13, r14, r15,\n        r8l, r9l, r10l, r11l, r12l, r13l, r14l, r15l,\n        r8w, r9w, r10w, r11w, r12w, r13w, r14w, r15w,\n        r8d, r9d, r10d, r11d, r12d, r13d, r14d, r15d",
"use":"access CPU registers directly using Assembly code",
"example":"mov eax,42\nadd eax,ecx",
"result":"eax now contains 42 plus the value in ecx",
"remarks":"many of these registers are only accessible if the CPU\nis runnig in a particular mode - eg: the R* registers require\n64 bit mode.",
"group":"X86 CPU"
},
{
"id":"!",
"action":"declare a procedure with its prototype (may be external or declared in advance)",
"example":"! fun(float a,b,c,d) as float\n! function fun(float a,b,c,d) as float",
"remarks":"There is a wide range of options for Declare statements. Please look at the examples and header files.",
"related":"declare, library, lib, alias, dim",
"group":"keywords"
},
{
"id":"#alert",
"action":"generates a compiler message (like an error)",
"use":"used to alert programmer about an area of code\nthat requires attention",
"example":"#alert (please implement methods for this interface)",
"related":"#error, #print",
"group":"directives"
},
{
"id":"#assign",
"action":"'=' always to be an assignment operator in conditional statements",
"use":"emulate the C convention for the '=' operator",
"example":"#assign on\nif hresult=QueryInterface(gu,ob) then ...",
"remarks":"when #assign is active then '==' must always be used to test equality",
"related":"#byref, #byval, #noinit, #noprec, indexbase",
"group":"directives"
},
{
"id":"#autodim",
"action":"enable variables to be created without a Dim statement",
"use":"for mall, informal programs.",
"example":"#autodim on",
"group":"directives"
},
{
"id":"#blockdepth",
"action":"return block nesting depth.",
"use":"to checking block depth at compile time.",
"example":"#blockdepth node x 'use any descriptive label on the line",
"remarks":"this command was introduced to catch unclosed blocks which\nare often hard to trace.",
"related":"scope, #recordof",
"group":"meta"
},
{
"id":"#byref",
"action":"pass parameter using its address instead of its value",
"related":"#byval, #noinit, #noprec, #assign, indexbase",
"group":"directives"
},
{
"id":"#byval",
"action":"pass parameter by value (not by its address)",
"related":"#byref, #noinit, #noprec, #assign, indexbase",
"group":"directives"
},
{
"id":"#case",
"action":"specify mode of case sensitivity.",
"use":"case can be <b>sensitive<\/b>, <b>insensitive<\/b>, or <b>capital<\/b>",
"example":"#case insensitive 'AbC is the same as 'aBC' and 'ABC'\n#case sensitive   'AbC and 'abc' are not the same\n#case capital     'AbC is the same as 'aBC' but not 'ABC'",
"remarks":"The default is 'insensitive'.\n#case has block scope and reverts to its previous state when\nthe block ends.",
"related":"#semicolon, indexbase",
"group":"directives"
},
{
"id":"#compact",
"action":"remove unused code",
"use":"minimise size of compiled binaries",
"remarks":"removes unused methods from classes, as well as unused general functions.",
"related":"#file",
"group":"directives"
},
{
"id":"#console",
"action":"programs compiled to EXE\/DLL will run in an existing console (MS Subsystem 3)",
"use":"prevents new console from being created. Inputs and outputs are with the existing console.",
"example":"#console",
"remarks":"When Oxygen is embedded it will use the Host's subsystem'",
"group":"directives"
},
{
"id":"#define",
"action":"define a macro (C syntax)",
"use":"C preprocessor statements",
"example":"#define X 32",
"related":"Macros, macro, def, #ifdef, #ifndef",
"group":"meta"
},
{
"id":"#else",
"action":"alternative block of code to include if prior conditions are not met.",
"related":"#if, #elseif, #endif",
"group":"meta"
},
{
"id":"#elseif",
"action":"include block of code if these alternative conditions are met",
"related":"#if, #else, #endif, #fi",
"group":"meta"
},
{
"id":"#endif",
"action":"end of conditional code inclusion block",
"related":"#if, #elseif",
"group":"meta"
},
{
"id":"#endv",
"action":"creates a window for compiler listings.",
"use":"Allows the programmer to see a selected part of the compiled code",
"example":"sys a,b,c\n###\na=b+c\n###\ns=\"Value \"+str(a)",
"remarks":"These markers restrict the listing to a window so that the code can be studied in detail.\n#view and #endv are generated internally from the pair of '###' symbols.",
"related":"#show",
"group":"directives"
},
{
"id":"#error",
"action":"generates a compiler error message",
"use":"used to alert programmer about inconsistencies\nthat require attention.",
"example":"#error (please implement methods for this interface)",
"related":"#alert, #print",
"group":"directives"
},
{
"id":"#file",
"action":"specifiy a filename for compiled code ( .EXE or .DLL )",
"use":"creates an executable <b>.EXE<\/b> or  Dynamic Link Library <b>.DLL<\/b> file",
"example":"#file FileName independent 64 bit",
"remarks":"only used in runtimes: rtl32.inc and rl64.inc",
"group":"commands"
},
{
"id":"#if",
"action":"include block of code if conditions are met",
"related":"#else, #elseif, #endif",
"group":"meta"
},
{
"id":"#ifdef",
"action":"include code if symbol already defined",
"use":"to allow blocks of code to be included or omitted at compile time",
"example":"#ifdef MSWIN\n  #include \"windows.inc\"\n#endif",
"related":"#if, #elseif, #endif",
"group":"meta"
},
{
"id":"#ifndef",
"action":"include code if symbol already defined",
"use":"to allow blocks of code to be included or omitted at compile time",
"example":"#ifdef MSWIN\n  #include \"windows.inc\"\n#endif",
"related":"#if, #elseif, #endif",
"group":"meta"
},
{
"id":"#lookahead",
"action":"internally creates header declarations for all procedures.",
"use":"allows procedure calls to forward reference",
"example":"#lookahead\nff \"ok\"\n'...\nsub ff(s as string)\n  print s\nend sub\n",
"remarks":"procedures in inner blocks are ignored, so each block must\nhave its own '#lookahead'",
"related":"scope",
"group":"directives"
},
{
"id":"#majorminor",
"action":"sets storage order for arrays",
"use":"row-major array compatibility",
"example":"#majorminor\ndim int yx[768,1024] 'y rows, x columns",
"remarks":"This is the default mode for multidimensional arrays",
"related":"#minormajor, indexbase, dim",
"group":"directives"
},
{
"id":"#minormajor",
"action":"sets storage order for arrays",
"use":"column-major array compatibility",
"example":"#minormajor\ndim int xy[640,480] 'minor first",
"related":"#majorminor, indexbase, dim",
"group":"directives"
},
{
"id":"#noinit",
"action":"prevent variables from being automatically initialised to nul within a procedure",
"related":"#noprec, #byref, #byval, #assign, indexbase",
"group":"directives"
},
{
"id":"#noprec",
"action":"directive to evaluate an expression from left to right, ignoring standard operator precedence rules.",
"related":"#noinit, indexbase, #byref, #byval, #assign",
"group":"directives"
},
{
"id":"#pragma",
"action":"ignored (C style compiler directives)",
"use":"compilers use it for platform or compiler-specific mode changes",
"example":"#pragma warning(push)",
"group":"directives"
},
{
"id":"#print",
"action":"display a constant expression during compilation",
"use":"Compile time diagnostics.",
"example":"#print \"not implemented\"",
"related":"#recordof, #if, #alert, #error",
"group":"meta"
},
{
"id":"#recordof",
"action":"return internal record of a declared entity.",
"use":"to check status at compile time.",
"example":"#recordof MyStructure",
"remarks":"this command was introduced to aid debugging at compile time\nare often hard to trace.",
"related":"#blockdepth",
"group":"meta"
},
{
"id":"#semicolon",
"action":"switch use of semicolon as comment marker or separator",
"use":"so semicolons can be recognised as separators when using C syntax",
"example":"#semicolon separator\ns=\"ok\"  ; print s\n#semicolon comment\nprint \"ok\" ; this is a comment",
"remarks":"#semicolon can be confined to a scope (function etc)",
"related":"#case, indexbase",
"group":"commands"
},
{
"id":"#show",
"action":"displays the translated code of a statement during compilation",
"use":"Allows the programmer to see a selected part of the compiled code",
"example":"sys a,b,c\n#show a=b+c 'display coding in a messagebox\n #show \"s.txt\" a=b+c 'save coding in file 's.txt'",
"related":"#view, view",
"group":"directives"
},
{
"id":"#unique",
"action":"flags an error if a a symbol definition is not unique (in the same nesting level)",
"use":"prevent symbols from being redefined",
"example":"#unique enabled\n#unique disabled 'default",
"group":"directives"
},
{
"id":"#view",
"action":"creates a window for compiler listings.",
"use":"Allows the programmer to see a selected part of the compiled code",
"example":"sys a,b,c\n###\na=b+c\n###\ns=\"Value \"+str(a)",
"remarks":"These markers restrict the listing to a window so that the code can be studied in detail.\n#view and #endv are generated internally from the pair of '###' symbols.",
"related":"#show",
"group":"directives"
},
{
"id":"$",
"action":"define an equate",
"use":"as a single-line macro",
"example":"'$' can be used instead of '%'\n'=' is optional\n% green = 0x00ff00\n% green 0x00ff00\n% BigPhi 1.618033\n% compiler \"OxygenBasic\"\nprint compiler\n'\n'SPECIALISED EQUATES\n'\n'%=' precalculate \n%  mol 42\n%= hmol mol*0.5 'stored as 21\n'\n'%*' iterative\n%* ResetNum %1=0  :\n%* ResetStr %1=\"\" :\nint a,b,c,d\nstring s,t,u,v\nResetNum a,b,c,d  'a=0 : b=0 : ...\nResetStr s,t,u,v  's=\"\" : t=\"\" : ...\n'\n'USE FOR PREFIXES\n'\n% ad Antediluvian\nad.X 'AntediluvianX'\n",
"remarks":"Equates can be used instead of constants  ",
"related":"Equates, Macros, #define. #def. def,deff",
"group":"macros"
},
{
"id":"%",
"action":"define an equate",
"use":"as a single-line macro",
"example":"'$' can be used instead of '%'\n'=' is optional\n% green = 0x00ff00\n% green 0x00ff00\n% BigPhi 1.618033\n% compiler \"OxygenBasic\"\nprint compiler\n'\n'SPECIALISED EQUATES\n'\n'%=' precalculate \n%  mol 42\n%= hmol mol*0.5 'stored as 21\n'\n'%*' iterative\n%* ResetNum %1=0  :\n%* ResetStr %1=\"\" :\nint a,b,c,d\nstring s,t,u,v\nResetNum a,b,c,d  'a=0 : b=0 : ...\nResetStr s,t,u,v  's=\"\" : t=\"\" : ...\n'\n'USE FOR PREFIXES\n'\n% ad Antediluvian\nad.X 'AntediluvianX'\n",
"remarks":"Equates can be used instead of constants  ",
"related":"Equates, Macros, #define. #def. def,deff",
"group":"macros"
},
{
"id":"&&",
"remarks":"logical operator",
"related":"&&, ||, ^^ operators",
"group":"operators"
},
{
"id":"&&=",
"remarks":"logical assign operator",
"related":"&&, ||, ^^ operators",
"group":"operators"
},
{
"id":"'",
"action":"comment till end of line",
"example":"'this is a comment",
"related":"\/*   *\/   \/\/  ;",
"group":"comments"
},
{
"id":"*",
"action":"return the integer value located by the address contained in the variable",
"use":"reading writing data, using pointers",
"example":"int a=42\nprint @a 'address of a\nsys b    'sys' ensures an integer large enough to hold a pointer\nb=@a     'assin address of a to b\nprint *b '42",
"remarks":"Unlike C, pointer resolution is normally handled implictly. ",
"related":"@, ?, strptr, addr",
"group":"operators"
},
{
"id":"*",
"related":"+, -, *=, \/, operators",
"group":"operators"
},
{
"id":"*\/",
"action":"terminate comment block",
"example":"\/* this is a comment *\/\n\n\/*\n  this is also a comment\n*\/",
"related":"\/*   \/\/   ;",
"group":"comments"
},
{
"id":"*=",
"related":"+, -, *, \/, operators",
"group":"operators"
},
{
"id":"+",
"related":"+=, -, *, \/, operators",
"group":"operators"
},
{
"id":"+=",
"related":"+, -, *, \/, operators",
"group":"operators"
},
{
"id":"-",
"related":"+, -=, *, \/, operators",
"group":"operators"
},
{
"id":"-=",
"related":"+, -, *, \/, operators",
"group":"operators"
},
{
"id":"\/",
"related":"+, -, *, \/=, operators",
"group":"operators"
},
{
"id":"\/*",
"action":"comment till end of block",
"example":"\/* this is a comment *\/\n\n\/*\n  this is also a comment\n*\/",
"related":"skip '   ;   *\/   \/\/",
"group":"comments"
},
{
"id":"\/\/",
"action":"comment till end of line",
"example":"\/\/ this is a comment",
"related":"'   ;   \/*   *\/",
"group":"comments"
},
{
"id":"\/=",
"related":"+, -, *, \/, operators",
"group":"operators"
},
{
"id":";",
"action":"comment till end of line",
"example":"'this is a comment",
"related":"'   \/*   *\/   \/\/",
"group":"comments"
},
{
"id":"<<",
"remarks":"logical operator",
"related":">>, <<<, >>>, operators",
"group":"operators"
},
{
"id":"<<<",
"remarks":"logical operator",
"related":"<<, >>, >>>, operators",
"group":"operators"
},
{
"id":">>",
"remarks":"logical operator",
"related":"<<, <<<, >>>, operators",
"group":"operators"
},
{
"id":">>>",
"remarks":"logical operator",
"related":"<<, >>, <<<, operators",
"group":"operators"
},
{
"id":"?",
"action":"return the integer value contained in the variable",
"use":"casting variables as integers",
"example":"float f=100\nprint hex(?f) 'display the hexadecimal form of float f",
"related":"cast, *, @, strptr, addr",
"group":"operators"
},
{
"id":"@",
"action":"return the address of a variable",
"use":"reading writing data of variables and arrays of variables, by reference",
"example":"int a=42\nprint @a 'address of a\nint *b 'indirect (pointer) variable\n@b=@a   'coupled by address\nprint b '42",
"remarks":"Unlike C, pointer resolution is handled implictly. So the <b>@<\/b> operator is required\nfor manipulating pointers. It is similar to the <b>&<\/b> operator in C. ",
"related":"*, ?, strptr, addr",
"group":"operators"
},
{
"id":"^^",
"remarks":"logical operator",
"related":"&&, ||, ^^ operators",
"group":"operators"
},
{
"id":"^^=",
"remarks":"logical assign operator",
"related":"&&, ||, ^^ operators",
"group":"operators"
},
{
"id":"_def",
"action":"define a low level system macro",
"remarks":"the <b>terminate<\/b>, <b>freelibs<\/b> and <b>freestatics<\/b> macros are specified in <b>RTL32.inc<\/b> and <b>RTL64.inc<\/b>",
"group":"commands"
},
{
"id":"abs",
"action":"returns the absolute value of a number (removes negative sign)",
"use":"AbsoluteValue=abs(value)",
"example":"a=abs(-2.5)",
"result":"a=2.5",
"related":"round, frac, trunc, floor, ceil",
"group":"floating point macros"
},
{
"id":"acos",
"action":"returns angle in radians given the ratio x\/radius",
"use":"angle=acos(YRRatio)",
"example":"a=acos(0.5)",
"result":"a=pi\/3",
"related":"cos, asin, atn, atan",
"group":"floating point macros"
},
{
"id":"addr",
"action":"resolve address of a variable (assembler)",
"use":"load address of a variable to a register",
"example":"sys a\naddr ecx,a",
"related":"@, *, ?, strptr",
"group":"directives"
},
{
"id":"and",
"same":"&",
"remarks":"bitwise operator",
"related":"and, or, xor, operators",
"group":"operators"
},
{
"id":"and=",
"same":"&=",
"remarks":"bitwise assign operator",
"related":"and, or, xor, operators",
"group":"operators"
},
{
"id":"any",
"use":"specify a parameter of uncertain type, nominally a signed integer of system width (32\/64 bits wide)",
"example":"function f(any*a) {...}",
"remarks":"Parameter of any type may be passed by-reference. Like C <b>void*<\/b>.",
"related":"sys, types",
"group":"primitive types"
},
{
"id":"anymatch",
"action":"match testing of symbol names",
"use":"to allow blocks of code to be included or omitted at compile time",
"example":"#if anymatch X, \"Vec\"\n  'X could be aVec FloatVec2 vector3f\n  #include \"mathutil.inc\"\n#endif",
"remarks":"generally for use inside macros",
"related":"match, leftmatch, rightmatch, #if, #elseif, #else, #endif, typeof, typecodeof, def, macro",
"group":"meta control",
"title":"anymatch"
},
{
"id":"asc",
"action":"returns ascii encoding of a character in a string",
"use":"AsciiCode=asc(String,CharacterPosition)",
"example":"'as function:\na=asc(\"ABCDEF\",2) 'a=66 'B'\n'as pseudo-command:\nasc(s,2)=98 's=\"AbCDEF\"",
"related":"unic, chr, mid, val, len, str",
"group":"string functions"
},
{
"id":"asciiz",
"use":"specify a string of ascii characters (8 bits wide)",
"example":"asciiz w=\"world\"\nasciiz buf[1024]\nbuf=w\nprint \"hello \"+buf",
"remarks":"similar to <b>C<\/b> char, but is not conflated with <b>byte<\/b> which is a numeric type",
"related":"wchar, types",
"group":"primitive types"
},
{
"id":"asin",
"action":"returns angle in radians given the ratio y\/radius",
"use":"angle=asin(YRRatio)",
"example":"a=asin(0.5)",
"result":"a=pi\/6",
"related":"sin, acos, atn, atan",
"group":"floating point macros"
},
{
"id":"atan",
"action":"returns angle in radians given the values of y and x",
"use":"angle=atan(y,x)",
"example":"a=atan(0.5,sqr(0.75))",
"result":"a=pi\/6",
"related":"atn, asin, acos, tan",
"group":"floating point macros"
},
{
"id":"atn",
"action":"returns angle in radians given ratio y\/x",
"use":"angle=atn(YXRatio)",
"example":"a=atn(1)*4",
"result":"a=pi",
"related":"atan, asin, acos, tan",
"group":"floating point macros"
},
{
"id":"bind",
"action":"bind a list of procedures from a Dynamic Link Library (DLL)",
"use":"for low level (without protoype) calls to DLL functions.\nthe first name is the one used in the program. The second is the name used in the DLL.",
"example":"sys Kernel32\nkernel32=LoadLibrary \"kernel32.dll\"\n\nbind kernel32\n(\nGetExitCodeProcess GetExitCodeProcess   ; @8\nExitProcess        ExitProcess          ; @4\nGetCommandLine     GetCommandLineA      ; @0\nGetModuleHandle    GetModuleHandleA     ; @4\nQueryPerformanceCounter QueryPerformanceCounter ; @4\n)",
"result":"the first column of keywords is recognised as procedure calls. A prototype may be attached\nto any of these keywords later. Otherwise the programmer must ensure that the parameters\npassed are a perfect match for each procedure call.",
"remarks":"Comments are supported - both semicolon and single quote marks.",
"related":"loadlibrary, freelibrary, getprocaddress, declare, library",
"group":"commands"
},
{
"id":"bool",
"use":"specify a variable to hold Boolean true\/false states",
"example":"bool t=true\nif not t then ...",
"remarks":"Notionally a Boolean type, but in reality. it is a 32bit signed integer, as in <b>C<\/b>  ",
"related":"any, types\nboolean, int, types",
"group":"primitive types"
},
{
"id":"boolean",
"use":"specify a variable to hold Boolean true\/false states",
"example":"boolean t=true\nif not t then ...",
"remarks":"Notionally a Boolean type, but in reality. it is an sbyte (8 bit signed integer  ",
"related":"bool, byte, int, any, types\nboolean, types",
"group":"primitive types"
},
{
"id":"break",
"action":"exit a switch block or do\/while block",
"related":"case, switch, while, do, continue",
"group":"control structures"
},
{
"id":"bstr",
"use":"specify a bstring type with 8-bit characters",
"example":"bstr s=\"name: \"\n...\nfrees s",
"remarks":"bstrings must be freed before going out of scope.",
"related":"wbstring, types",
"group":"primitive types"
},
{
"id":"bstring",
"use":"specify a bstring type with 8-bit characters",
"example":"bstring s=\"name: \"\n...\nfrees s",
"remarks":"bstrings must be freed before going out of scope.",
"related":"wbstring, types",
"group":"primitive types"
},
{
"id":"byref",
"action":"pass a parameter by reference (address)  ",
"use":"In function prototypes and calls",
"example":"'In prototypes: receiving a value indirectly\nfunction foo(byref v as long) as long\n'equivalent in C notation:\nlong foo(long * v)\n\n'In dim statements:\ndim as word byref a = getmemory(1024)\n'equivalent in C notation:\nword * v = getmemory(1024)\n'equivalent using 'at':\nword v at getmemory(1024)\n",
"related":"byval, null, #byref, #byval",
"group":"misc"
},
{
"id":"byte",
"use":"specify a byte type (8 bits wide)",
"example":"byte colon=58",
"remarks":"limited to values 0..255 \/ 0x00 to 0xFF",
"related":"types",
"group":"primitive types"
},
{
"id":"bytesof",
"action":"return space used by an array variable",
"use":"nbytes=spanof variable dimensionion",
"example":"dim as long v(10) : n=bytesof v",
"result":"n=40",
"related":"sizeof, spanof, offsetof, typeof, typecodeof, recordof",
"group":"attributes"
},
{
"id":"byval",
"action":"pass a parameter by value  ",
"use":"In function prototypes and calls",
"example":"'In prototypes: receiving a value directly\nfunction foo(byval v as long)\n'equivalent in C notation:\nlong foo(long v)\n\n'In calls: passing a value directly\nerr=CoCreateInstance VoiceObjGuid, pUnkouter, context, ISpVoiceGuid, byval @@voice\n",
"related":"byref, null, #byval, #byref",
"group":"misc"
},
{
"id":"case",
"action":"specify a case to match followed by actions to perform",
"related":"Selection, select, endselect, end",
"group":"control structures"
},
{
"id":"cast",
"action":"change or specify the type of a variable temporarily, in an expression",
"example":"float f=100\nprint hex( cast(int) f) 'display the hexadecimal form of float f\nprint hex( (int) f )    'the same without using the 'cast' word",
"related":"convert, ?, union",
"group":"operators"
},
{
"id":"cdecl",
"action":"determines how parameters are passed on the stack   ",
"use":"declaring external functions, and variadic functions",
"remarks":"this is a common calling convention on 32bit platforms. The stack is cleaned up\nafter the call by the caller.",
"related":"calling_conventions, cdecl, ms64, pascal, callback",
"group":"calling conventions"
},
{
"id":"ceil",
"action":"round up the value to the most positive integer",
"use":"IntegerValue=ceil(FloatValue)",
"example":"i=ceil(123.456)",
"result":"i=124",
"related":"floor, round, trunc, frac",
"group":"floating point macros"
},
{
"id":"char",
"use":"specify a string of ascii characters (8 bits wide)",
"example":"char w=\"world\"\nchar buf[1024]\nbuf=w\nprint \"hello \"+buf",
"remarks":"similar to <b>C<\/b> char, but is not conflated with <b>byte<\/b> which is a numeric type",
"related":"wchar, types",
"group":"primitive types"
},
{
"id":"chr",
"action":"returns string of 1 character of ascii encoding (0..255)",
"use":"string=chr(AsciiValue)",
"example":"'as function:\ns=chr(65) 's=\"A\"\n'as pseudo-command:\nstring s=\"abcdef\"\nchr(s,2)=\"B\" 's=\"aBcdef\"",
"related":"wchr, asc, unic, mid string",
"group":"string functions"
},
{
"id":"class",
"action":"define a class (strucure and methods for objects)",
"example":"'DEFINE CLASS\n'  \nclass rgbacolor\n  '\n  byte red,green,blue,alpha\n  = 'union\n  int c\n  '\n  function in(int r,g,b,a)\n    red=r : green=g : blue=b : alpha=a\n  end function\n  '\n  function color() as int\n    return c\n  end function\n  '\nend class\n\n'INSTANTIATE\n\ndim rgbaColor c\n\n'CALL METHODS\n'\nc.in(100,200,100,128)\nprint hex c.color()\n",
"remarks":"Classes are an extenstion of <b>type<\/b>. They may also contain their own\nequates, macros and static variables, accessable only within the class functions.",
"related":"Classes, type, new, del",
"group":"commands"
},
{
"id":"com",
"remarks":"COM is a protocol used by Microsoft to provide Object interfaces. Classes\nwith this attribute are considered Virtual.",
"related":"virtual external export class of inherits\nextern, virtual, class",
"group":"classes"
},
{
"id":"comparestr",
"action":"compare first string with second string",
"use":"comparestr bstr1, bstr2 : jg ifgreater : jl ifless : jz ifequal      ",
"example":"comparestr bs1,bs2",
"related":"string, char, str",
"group":"low level functions"
},
{
"id":"const",
"action":"create read-only variables",
"use":"constants",
"example":"const int a=40, b=60\nconst float f[]={ 1, 1.5, 2, 2.5, 3.0 }  \nconst as string s=\"HelloWorld\"",
"related":"dim, #unique",
"group":"keywords"
},
{
"id":"continue",
"action":"go back to the beginning of a <b>do<\/b>, <b>while<\/b> or <b>for<\/b> block",
"use":"to \"short circuit\" a loop",
"remarks":"<b>continue do<\/b> and <b>continue while<\/b> will loop back to the\nnearest <b>do<\/b> or <b>while<\/b> at the same nesting level.\n\n<b>continue for<\/b> will jump to the iterator stepper before looping back.",
"related":"Loops, do, while, for, break, exit, wend, enddo, repeat",
"group":"control structures"
},
{
"id":"convert",
"action":"explicitly convert the type of an expression.",
"use":"pass values, in the required type, to an unprototyped function",
"example":"float f=2.5\nsleep ( convert int ( f*1000 ) )",
"related":"cast",
"group":"operators"
},
{
"id":"copy",
"action":"string to another location by a specified number of bytes",
"use":"copy DestinationAddress, SourceAddress, NumberOfBytes",
"example":"copy &dest,&src,n",
"remarks":"copy and copyn are the same",
"related":"copy0, copy00",
"group":"low level functions"
},
{
"id":"copy0",
"action":"copy null terminated string to another location",
"use":"copy DestinationAddress, SourceAddress",
"example":"copy0 &a,&b",
"related":"copy00, copy",
"group":"low level functions"
},
{
"id":"copy00",
"action":"copy null terminated string of wide (2 byte) characters to another location",
"use":"copy DestinationAddress, SourceAddress",
"example":"copy00 &v,&w",
"related":"copy0, copy, copyn",
"group":"low level functions"
},
{
"id":"copyn",
"action":"string to another location by a specified number of bytes",
"use":"copy DestinationAddress, SourceAddress, NumberOfBytes",
"example":"copy &dest,&src,n",
"remarks":"copy and copyn are the same",
"related":"copy0, copy00",
"group":"low level functions"
},
{
"id":"cos",
"action":"returns cosine value (ratio of x\/r)  given angle in radians",
"use":"Cosine=cos(radians)",
"example":"c=cos(pi\/3)",
"result":"c=0.5",
"related":"sin, tan",
"group":"floating point macros"
},
{
"id":"declare",
"action":"declare a procedure with its prototype (may be external or declared in advance)",
"example":"declare fun(float a,b,c,d) as float\ndeclare function fun(float a,b,c,d) as float",
"remarks":"There is a wide range of options for Declare statements. Please look at the examples and header files.",
"related":"!, library, lib, alias, dim",
"group":"keywords"
},
{
"id":"def",
"same":"#def",
"action":"define a low level macro",
"example":"'DEFINE MACRO:\n\ndef Create\n  dim as %1 %2\n  %2.new(\"%2\")\nend def\n\n'INVOKE MACRO\n\ncreate SomeClass SomeObject\n\n'EXPANDS TO:\n\ndim as SomeClass SomeObject\nSomeObject.new(\"SomeObject\")\n'\n'CREATING UNIQUE SYMBOLS INSIDE DEF\n'BY USING %0 PREFIX\nint i=1\ndef HiddenI\n  int %0i\n  i=21\n  print i '21\nend def\nHiddenI\nprint i '1",
"remarks":"often used in conjunction with macros and meta-language, ",
"related":"macro, #define, deff, #if, scope",
"group":"commands"
},
{
"id":"deff",
"action":"create an assembly code macro for the FPU  (metatype -17)",
"use":"to create floating point maths functions",
"example":"deff sine fsin",
"remarks":"Deff macros make use of the FPU. All float functions are defined this way.\nThese are non-recursive macros and take no macro arguments. The expression parser is FPU- \naware and takes care of passing parameters onto the FPU stack.",
"related":"Macros, def, #define, macro, sin, cos ",
"group":"macros"
},
{
"id":"defined",
"action":"test whether a symbol exists",
"use":"to allow blocks of code to be included or omitted at compile time",
"example":"#if defined X\n#else\n  dim string X\n#endif",
"remarks":"generally for use inside macros",
"related":"undefined, #ifdef, #ifndef, #if, #elseif, #else, #endif, def, macro",
"group":"meta control",
"title":"defined"
},
{
"id":"deg",
"action":"returns degrees from value given in radians",
"use":"degrees=deg(radians)",
"example":"d=deg(pi)",
"result":"180",
"related":"rad, atan",
"group":"floating point macros"
},
{
"id":"del",
"action":"Call a dynamic object's destructor method and disallocate its memory block.",
"use":"to delete objects and dynamic strings",
"example":"del cuboid",
"remarks":"'del' may also be used to delete the content of individual strings and bstrings, and 'del' can be used\nto delete the contents of dynamic arrays.\nStrings are set to null; the contents are released and removed from the garbage collector's lists.",
"related":"classes, new, redim, undef",
"group":"system macro"
},
{
"id":"dim",
"action":"define a set of one or more variables",
"use":"create variables and arrays of variables with optional initial values",
"example":"dim as string s=\"Hello World\"\ndim int i(100)\ndim float yx[480,640]\ndim as string s[]<=( \"one\",\"two\",\"three\" )\ndim as string s[]<={ \"one\",\"two\",\"three\" }\ndim as string s={ \"one\",\"two\",\"three\" }\ndim as string s={ \"one\",\"two\",\"three\" }\ndim c as char*10  'c(10)\ndim c(10) as char*16 'c(10,16)\n'\n'C style:\n'\nint a[1000,2]\nint a[]={2,4,6,8}\nint a={2,4,6,8}",
"remarks":"A variety of dim expressions to support various coding styles",
"related":"local, static, redim, let, var, const,type, indexbase",
"group":"keywords"
},
{
"id":"dims",
"action":"specifies number of dimensions of an array",
"use":"iterating over array dimension metrics",
"example":"indexbase 1 'default\ndim int a(200,10)\nprint dims(a) '2",
"related":"ubound, lbound, scaler, strider, dim, redim",
"group":"system macro"
},
{
"id":"do",
"action":"start a block for repetition (looping)",
"example":"a=0\ndo\n  '...\n  a+=1 : if a=4 then exit do\nloop",
"result":"a=4 '4 loops",
"related":"Loops, while, continue, exit, enddo, loop",
"group":"control structures"
},
{
"id":"double",
"use":"specify a double precision floating point variable (64 bits wide)",
"example":"double f=1\/3",
"related":"single, float, extended, types",
"group":"primitive types"
},
{
"id":"dword",
"use":"specify a long unsigned integer (32 bits wide)",
"example":"dword ui=0xA0000000",
"related":"word, long, int, quad, types",
"group":"primitive types"
},
{
"id":"dyn",
"action":"create a low-level dynamic array",
"use":"create an extendable array at run-time",
"example":"int n=64\ndyn string s(n)\n...\ndel s",
"remarks":"dyn variable do not have array attributes, like uound. Use redim\nwhen you intend to use ubound, dims, etc.",
"related":"stretch, redim remap, dim, del, ",
"group":"system macro"
},
{
"id":"else",
"action":"starts the alternative block where none of the prior conditions are met",
"use":"conditional execution",
"example":"'single line\nif a>b then print a else print b \n'\n'multi-line\nif a>b\n  print a\nelse\n  print b\nendif",
"related":"Conditionals, if, elseif, endif",
"group":"control structures"
},
{
"id":"elseif",
"action":"make an alternative test if the previous condition was not met.",
"use":"conditional execution",
"example":"if a<=0\n  'do nothing  \nelseif a>b\n  print a\nelse\n  print b\nendif",
"related":"Conditionals, if, else, endif select, case",
"group":"control structures"
},
{
"id":"encodingof",
"action":"return the operand encoding of a variable or macro",
"use":"obtain data for diagnostics or reflective programming",
"example":"sys v\nprint encodingof v 'example: [ebx+4100]",
"related":"prototypeof, sizeof, offsetof, spanof, typeof, typecodeof, recordof, #recordof",
"group":"attributes"
},
{
"id":"end",
"action":"marks the end of a code block",
"use":"terminating various block structures",
"example":"if a>b then\n  b=a\nend if",
"remarks":"An isolated 'end' terminates the program.",
"related":"scope, if, do, while, select, function, sub, method, class, macro, def",
"group":"keywords"
},
{
"id":"enddo",
"same":"end do, loop",
"action":"end a <b>do<\/b>  repeating block ",
"related":"Loops, while, do, loop, continue, exit",
"group":"control structures"
},
{
"id":"endif",
"same":"end if",
"action":"end the conditional block",
"use":"conditional execution",
"example":"if a>b then\n  a=b\nendif",
"related":"Conditionals, if, then, elseif, else, end if",
"group":"control structures"
},
{
"id":"endselect",
"same":"end select",
"action":"end the select block",
"related":"Selection, select, switch, case",
"group":"control structures"
},
{
"id":"endwhile",
"same":"end while",
"action":"end a <b>while<\/b> block",
"related":"Loops, do, while, continue, exit",
"group":"control structures"
},
{
"id":"enum",
"action":"create an enumeration",
"use":"assign a numeric identity to a name",
"incstring1":"\n\n  '------------\n  'ENUMERATIONS\n  '============\n\n  'SIMPLE ENUMERATION\n  '==================\n\n  enum ManyThings\n    shoes \n    ships\n    sealing_wax\n    cabbages\n    kings\n  end enum\n\n  def show \"%1: \" %1\n\n  print show cabbages \n\n\n  'ENUMERATION FROM A BASE VALUE\n  '=============================\n\n  enum ManyThings\n    shoes=11\n    ships\n    sealing_wax\n    cabbages\n    kings\n  end enum\n\n  print show ships \n\n\n  'BITWISE ENUMERATION\n  '===================\n  '1 2 4 8 16 32 64 ...\n\n  enum bit ManyThings\n    shoes\n    ships\n    sealing_wax\n    cabbages\n    kings\n  end enum\n\n\n  'ENUMERATION USAGE\n  '=================\n\n  'Dim as ManyThings mt\n  ManyThings mt\n  mt=cabbages\n  print mt\n  \n\n\n",
"remarks":"C syntax is supported for this construct. Also <b>enum bit<\/b>\nassigns values 1,2,4,8,16.. instead of 0,1,2,3,4..",
"related":"typedef, enum, #define, (%)",
"group":"commands"
},
{
"id":"error",
"action":"returns a string containing the most recent compile or runtime errors (cleared at start of compiling)",
"use":"to trap runtime errors",
"example":"string e=error\nif e then print e : 'followied by exit procedures",
"result":"displays the last error, if it exists.",
"remarks":"the error buffer is automatically cleared after using this function.",
"related":"#error, #alert",
"group":"string functions"
},
{
"id":"exit",
"action":"exit a <b>do<\/b>  <b>while<\/b> <b>for<\/b>  <b>(...)<\/b> block immediately",
"use":"leave a loop, usually after a condition has been met",
"example":"a=0 : b=1\ndo\n  a+=1\n  if a>4 then exit do\n  b+=b\nend do\n'\n'conditional exit\ndo\n  ...\n  exit when a>b\n  exit if a>b\nloop\n'\n'structured assembler exit\n(\n ...\n dec ecx\n jle exit\n repeat\n)",
"related":"Loops, do, while, continue, repeat",
"group":"control structures"
},
{
"id":"exp",
"action":"returns exponent of a value",
"use":"a=exp(value)",
"example":"a=exp(1)",
"result":"a=2.718281828",
"remarks":"This is the Euler number e, equivalent operation e^v",
"related":"pow,log, logn",
"group":"floating point macros"
},
{
"id":"export",
"remarks":"procedures with this attribute are visible to external callers\nwhen they are compiled as part of a DLL (Dynamic Link Library)",
"related":"external, function, sub, extern",
"group":"secondary keyword\ndeclaration"
},
{
"id":"extended",
"use":"specify an extended precision floating point variable (80 bits wide)",
"example":"extended e=1\/3",
"remarks":"this type holds the full precision of the pentium floatin point processor (FPU)",
"related":"single, float, double, types",
"group":"primitive types"
},
{
"id":"extends",
"same":"of\nfrom",
"remarks":"'of', and 'from' and extends are equivalent. They \nindicate derivation from a single parental class.\nCOM interfaces us single inheritance",
"related":"has, class",
"group":"secondary keyword\nclasses"
},
{
"id":"extern",
"action":"associate declared procedures with a calling convention and\/or dll name",
"example":"extern stdcall lib \"kernel32.dll\"\n  declare function QueryPerformanceCounter(lpPerformanceCount as quad) as sys\n  declare function QueryPerformanceFrequency(lpPerformanceFrequency as quad) as sys\nend extern",
"remarks":"note ther is no need to use an Alias in these declarations if you give the exact name\nof the procedures in their original case.",
"related":"lib, library, calling_conventions",
"group":"linkage"
},
{
"id":"external",
"remarks":"functions with the external attribute expect to be called from\nprocedures external to Oxygen. Additional register management is\nenlisted to support external calls.\n\nObjects of classes with this attribute have virtual function table\npointers embedded in their structures to enable their methods to\nbe invoked externally. For internally used objects, the methods table\nis known to the objects at compile time so VFT pointers are not used.",
"related":"extern, com, export, callback, com, virtual, function, sub, method",
"group":"secondary keyword\ndeclaration"
},
{
"id":"false",
"action":"insert 0",
"use":"universal value for boolean false",
"example":"int a=false",
"related":"true, not__bits, not__conditional",
"group":"system macro"
},
{
"id":"float",
"use":"specify a floating point variable (32 bits wide)",
"example":"float f=1\/100",
"remarks":"same as single",
"related":"single, double, extended, types",
"group":"primitive types"
},
{
"id":"floor",
"action":"round down the value to the most negative integer",
"use":"IntegerValue=floor(FloatValue)",
"example":"i=floor(-123.456)",
"result":"i=-124",
"related":"ceil, round, trunc, frac",
"group":"floating point macros"
},
{
"id":"for",
"action":"start an iteration block",
"related":"Iteration, to, step, next",
"group":"control structures"
},
{
"id":"foreach",
"action":"iterates operations for elements of an array.",
"use":"compact iteration statements   ",
"example":"dim string s[100]\nforeach s { s[i]=space(16) }",
"remarks":"The operation is applied to all elements from \nlound(a) to ubound(a). 'i' is a scoped index variable \nwhich does not affect previously defined variables named 'i'.",
"related":"Iteration, for, to, step, next",
"group":"macros"
},
{
"id":"frac",
"action":"returns the fractional part of a value",
"use":"FractionValue=frac(value)",
"example":"n=frac(123.456)",
"result":"n=0.456",
"related":"round, abs",
"group":"floating point macros"
},
{
"id":"freelibrary",
"action":"free library",
"use":"freelibrary handle",
"example":"freelibrary h",
"related":"loadlibrary, library, getprocaddress",
"group":"low level functions"
},
{
"id":"freelibs",
"action":"free all loaded DLL libraries only (at end of program)",
"use":"allow the program to terminate but all static strings are retained",
"example":"freelibs",
"related":"terminate, freestrings",
"group":"system macro"
},
{
"id":"freememory",
"action":"free previously allocated memory block",
"use":"freememory address",
"example":"freememory m",
"related":"getmemory, news, frees",
"group":"low level functions"
},
{
"id":"frees",
"action":"deallocates a bstring",
"use":"frees bstring freememory",
"example":"b=news 1000\n'...\nfrees b",
"result":"b contains address of a string of 1000 nul characters . Then the sting is freed",
"remarks":"Oxygen strings are automatically freed but Bstrings must be explicitly freed when no longer needed.",
"related":"news nuls, freememory, getmemory",
"group":"memory functions"
},
{
"id":"freestrings",
"action":"deallocate all remaining static strings only (at end of program)",
"use":"allow the program to terminate without freeing libraries",
"example":"freestrings",
"related":"terminate, freelibs",
"group":"system macro"
},
{
"id":"function",
"action":"define a function",
"example":"function triple(i as int) as int\n  return i*3\nend function\nprint triple(5) '15\n'\nfunction triple(i as int=1) as int\n  return i*3\nend function\nprint triple(4) '12 'using specified value\nprint triple()  '3  'using default nalue",
"related":"Procedures, sub, method, subroutine",
"group":"procedures"
},
{
"id":"getfile",
"action":"copies file content to a string",
"use":"String=getfile FileName : getfile FileName,String",
"example":"string s : getfile \"t.txt\",s",
"result":"s contains content of \"t.txt\"",
"related":"putfile, print",
"group":"string functions"
},
{
"id":"getmemory",
"action":"allocate block of memory and return its base address",
"use":"address=getmemory bytes",
"example":"m=getmemory 8000",
"related":"freememory, news, frees",
"group":"low level functions"
},
{
"id":"getprocaddress",
"action":"get procedure address",
"use":"getprocaddress libraryHandle \"proc name\"",
"example":"a=getprocaddress h, \"AllocConsole\"",
"related":"loadlibrary, freelibrary, library",
"group":"low level functions"
},
{
"id":"gosub",
"action":"call a labelled subroutine",
"use":"invoke subroutines inside a procedure",
"example":" 'gosub a label\n function f() as int\n   gosub report\n   exit function\n   report:\n   print \"complete\"\n   ret\n end function\n '\n 'gosub a subroutine\n function f() as int\n   gosub report\n   exit function\n   subroutine report\n     print \"complete\"\n   end subroutine\n end function",
"incstring1":"'% filename \"t.exe\"\n'uses rtl64\n\n\/*\nsubroutines are normally located inside a function or procedure,\nthen they have access to all the local and static variables.\n*\/\n\nfunction f(int a)as int\n  int b\n\n  gosub g when a>0\n  return b\n  '\n  g:\n  b=a\/2\n  ret\n  '\nend function\n\nprint f( 42)\nprint f(-42)\n\n",
"remarks":"Always exit subroutines with 'ret'",
"related":"Procedures, subroutine, call, goto",
"group":"procedures"
},
{
"id":"goto",
"action":"jump to a specified label in the code",
"use":"go to to another part of the program",
"example":"if a>b then goto ending\n...\nending:\nprint \"Done\"\n'\n'It is also possile to 'goto' an absolute address stored in a variable\nsys ad=@aa 'address of aa\ngoto ad\n...\naa:",
"remarks":"Use this command with care, so that your code remains readable\nand easy to maintain.",
"related":"jmp, gosub",
"group":"control structures"
},
{
"id":"guidtxt",
"action":"converts guidval to guidstring",
"use":"COM interfaces",
"example":"print guidtxt(clsid)",
"result":"displays: {96749377-3391-11D2-9EE3-00C04F797396}",
"related":"guidval, com",
"group":"string functions"
},
{
"id":"guidval",
"action":"converts guid string to guidval",
"use":"COM interfaces",
"example":"guid clsid\nguidval clsid,\"{96749377-3391-11D2-9EE3-00C04F797396}\"",
"related":"guidtxt, com",
"group":"string functions"
},
{
"id":"has",
"example":"  class person\n    has mind\n    has body\n    ...\n",
"remarks":"<b>'has'<\/b> is used when the class is derived from more than a single\nparental class. ie: multiple inheritance. 'has' may be omitted. It is sufficient\nto provide the class\/type name without this qualifier.",
"related":"of, from, extends, class, classes",
"group":"secondary keyword\nclasses"
},
{
"id":"hex",
"action":"returns hexadecimal string representation of integer part of number",
"use":"hexString=hex(value)",
"example":"print hex(14.4)      'result 'E'\nprint hex(14.4, 4)   'result '000E'",
"related":"str, val",
"group":"string functions"
},
{
"id":"hibyte",
"action":"return bits 8..15 of an integer expression",
"example":"wh=hibyte(wParam)",
"related":"lobyte, loword, hiword",
"group":"system macro"
},
{
"id":"hiword",
"action":"return bits 16..31 of an integer expression",
"example":"wh=hiword(wParam)",
"related":"loword, lobyte, hibyte",
"group":"system macro"
},
{
"id":"hypot",
"action":"returns the hypotenuse (longest side) of a right angle triangle given the other 2 sides.",
"use":"hypotenuse=hypot(side1,side2)",
"example":"h=hypot(3,4)",
"result":"h=5",
"related":"sqr, pow",
"group":"floating point macros"
},
{
"id":"if",
"action":"start a conditional block with a test",
"use":"conditional execution",
"example":"'single liner\nif a<b then a=b\n'\n'block ('then' is optional)\nif a<b\n  a=b\nendif",
"related":"Conditionals, then, else, elseif, endif, while",
"group":"control structures"
},
{
"id":"incl",
"action":"expand macro non recursively without parameter substitutions",
"use":"incl aMacro   ",
"example":"def helo \"hello \" %1\nincl helo",
"result":"substitution: \"hello \" %1",
"related":"def",
"group":"commands"
},
{
"id":"include",
"same":"#include",
"action":"include source code from another file",
"use":"used for including header files and other files of source code",
"example":"#include \"rtl32.inc\"",
"remarks":"include and #include are the same",
"related":"uses, includepath",
"group":"commands"
},
{
"id":"includepath",
"action":"define a filepath for source files specified by <b>include<\/b>.",
"related":"include, librarypath",
"group":"commands"
},
{
"id":"indexbase",
"action":"define the index base for an array",
"use":"most software assumes an indexbase of 0 or 1",
"example":"indexbase 0",
"remarks":"the default indexbase is 1 but C code normally assumes 0.\nIf the indexbase is defined inside a scope, such as a function then it\nonly applies within the scope and reverts to its previous value outside the scope.",
"related":"dim, #case, #semicolon",
"group":"directives"
},
{
"id":"instr",
"action":"returns position of String2 within string1 searching from start position",
"use":"location=instr(string1,string2) : location=instr(start,string1,string2)",
"example":"p=instr(\"abcdef abcdef\",\"def\") : q=instr(8,\"abcdef abcdef\",\"def\")",
"result":"p=4 : q=11",
"remarks":"also works with untyped pointers",
"related":"replace, mid",
"group":"string functions"
},
{
"id":"int",
"use":"specify a long signed integer (32 bits wide)",
"example":"int i=0x7fffffff",
"related":"dword, types",
"group":"primitive types"
},
{
"id":"integer",
"use":"specify a long signed integer (32 bits wide)",
"example":"integer i=0x7fffffff",
"related":"dword, types",
"group":"primitive types"
},
{
"id":"interface",
"action":"mark the start of shared code",
"use":"define shareable code in a module",
"example":"'Interface' is currently a null definition.\nIt can be redefined  in macro form to generate\ncustom code.",
"related":"module, namespace",
"group":"structures"
},
{
"id":"intern",
"action":"define a block to go inside a class methods block",
"use":"provide a block for class private functions etc",
"example":"class cc\n  float a\n  intern\n    float hp=0.5*pi() 'only visible to functions of the class\n  end intern\n  function m() as float\n    return a*hp\n  end function\nend class",
"related":"Blocks, class, methods, scope",
"group":"structures"
},
{
"id":"lbound",
"action":"specifies min index of an array dimension",
"use":"checking array limits",
"example":"indexbase 1 'default\ndim int a(200,10)\nprint lbound(a) '1\nprint lbound(a,1) '1\nprint lbound(a,2) '1",
"related":"dims, ubound, scaler, strider, dim, redim",
"group":"system macro"
},
{
"id":"lcase",
"action":"returns lowercase of string",
"use":"string=lcase(string)",
"example":"s=lcase \"ABCDEF\"",
"result":"s=\"abcdef\"",
"related":"ucase, ltrim, rtrim, asc",
"group":"string functions"
},
{
"id":"left",
"action":"returns left part of a string by length",
"use":"string=left string1,length",
"example":"s=left \"abcdef\",3",
"result":"s=\"abc\"",
"related":"right, mid, ltrim, rtrim",
"group":"string functions"
},
{
"id":"leftmatch",
"action":"match testing of symbol names",
"use":"to allow blocks of code to be included or omitted at compile time",
"example":"#if leftmatch X, \"vector\"\n  'X could be vector vector2f vector3f\n  #include \"mathutil.inc\"\n#endif",
"remarks":"generally for use inside macros",
"related":"match, rightmatch, anymatch, #if, #elseif, #else, #endif, typeof, typecodeof, def, macro",
"group":"meta control",
"title":"leftmatch"
},
{
"id":"len",
"action":"returns length of string in charaters",
"use":"length=len(string)",
"example":"v=len(\"Hello\")",
"result":"v=5 characters",
"remarks":"characters may be one or two bytes (wide characters)",
"related":"string, space, mid, sizeof",
"group":"string functions"
},
{
"id":"let",
"action":"defines a variable or object",
"use":"create a new variable or indirect object",
"example":"let s=\"Hello World\"\nprint typeof s 'result: 'string'",
"remarks":"Similar to using 'dim' but the type is inferred from the assigned value.",
"related":"dim, var",
"group":"structures"
},
{
"id":"lib",
"action":"specify the name of a DLL library to associate\n        with a set of procedure declarations",
"example":"lib \"kernel32.dll\"",
"related":"declare",
"group":"directives"
},
{
"id":"lib",
"remarks":"lib may be specified in the Declare statement or it may be\nspecified in an extern statement, referring to an entire group\nof declarations.",
"related":"library, declare, extern, alias, link, at",
"group":"secondary keyword\ndeclaration"
},
{
"id":"library",
"action":"specify the name of a DLL library to associate\n        with a set of procedure declarations",
"example":"lib \"kernel32.dll\"",
"related":"declare",
"group":"directives"
},
{
"id":"librarypath",
"action":"define a filepath for DLL files",
"use":"tells the computer where to find Dynamic Link Libraries\nrequired to run the program. (System DLLs  do not require this.)",
"related":"library, extern, includepath",
"group":"commands"
},
{
"id":"lin",
"action":"returns the logarthm of the first value to base e (2.71828182845904523536 .)",
"use":"LogValue=log(Value)",
"example":"a=log(10)",
"result":"a=2.30258092...",
"related":"lin2, log10, logn, pow",
"group":"floating point macros"
},
{
"id":"loadlibrary",
"action":"load a library (if not already loaded) and return its handle",
"use":"handle=loadlibrary \"library filename\"",
"example":"h=loadlibrary \"kernel32.dll\"",
"related":"freelibrary, library, getprocaddress",
"group":"low level functions"
},
{
"id":"lobyte",
"action":"return the lower 8 bits of an integer expression",
"example":"wl=lobyte(wParam)",
"related":"hibyte, loword, hiword",
"group":"system macro"
},
{
"id":"local",
"action":"define a local set of variables",
"example":"local string s\ndim local string t",
"related":"dim, static",
"group":"keywords"
},
{
"id":"log",
"action":"returns the logarthm of the first value to base e (2.71828182845904523536 .)",
"use":"LogValue=log(Value)",
"example":"a=log(10)",
"result":"a=2.30258092...",
"related":"lin2, log10, logn, pow",
"group":"floating point macros"
},
{
"id":"log10",
"action":"returns the logarthm of the first value to base 10",
"use":"LogValue=log10(Value)",
"example":"a=log10(100)",
"result":"a=2",
"related":"log, log2, logn, pow",
"group":"floating point macros"
},
{
"id":"log2",
"action":"returns the logarthm of the first value to base 2",
"use":"LogValue=log2(Value)",
"example":"a=log2(32)",
"result":"a=5",
"related":"log, log10, logn, pow",
"group":"floating point macros"
},
{
"id":"logn",
"action":"returns the logarthm of the first value to the base of the second value.",
"use":"value=logn(value1,value2)",
"example":"u=logn 1000,10) : v=logn(pow(10,1.5),10)",
"result":"u=3 : v=1.5",
"related":"log, log2, log10, pow",
"group":"floating point macros"
},
{
"id":"long",
"use":"specify a long integer (32 bits wide). Also used in conjunction\nwith other types to double the bit width",
"example":"long i\n long sbyte w  'a 16 bit integer\nlong char sw  'a wchar character\nlong float fw 'a double precision float",
"related":"short, types",
"group":"primitive types"
},
{
"id":"loop",
"same":"end do, enddo",
"action":"end a <b>do<\/b> repeating block ",
"related":"Loops, do, continue, exit",
"group":"control structures"
},
{
"id":"loword",
"action":"return the lower 16 bits of an integer expression",
"example":"wl=loword(wParam)",
"related":"hiword, hibyte, lobyte",
"group":"system macro"
},
{
"id":"lpartof",
"action":"return left part of dotted name",
"use":"exract main part from dotted name\nfor use in macros.",
"example":"lpartof(a.b.c).x 'returns a.x",
"related":"rpartof, vtypeof",
"group":"attributes"
},
{
"id":"ltrim",
"action":"returns string with white space on the left trimmed off",
"use":"string=rtrim(string)",
"example":"s=ltrim \"   abc\"",
"result":"s=\"abc\"",
"related":"rtrim, space, str, lcase, ucase",
"group":"string functions"
},
{
"id":"macro",
"action":"define a high level macro",
"use":"many uses. Often a pseudo function for producing\ninline code instead of a call",
"related":"macros, #define, #def, def, deff",
"group":"macros"
},
{
"id":"macro__functions",
"use":"invoke multi-line macros within expressions",
"incstring1":"'USING MACRO FUNCTIONS\n'2D ARRAY WITH BOUNDARY CLIPPING\nindexbase 0\nint pix[800*600]\n'\n'SINGLE-LINE MACRO FUNCTION\n'macro pix2d(x,y) pix(y*800+x)\n'\n'MULTI-LINE MACRO RETURNING A UNIQUE VARIABLE\n'\nmacro pix2d int* (v,x,y,  vv)\n=============================\n  'v  pixel pointer supporting read\/write\n  'x  horizontal coordinate\n  'y  vertical coodinate\n  'vv sink pixel\n  if x>=0 and x&#60;800 and y>=0 and y&#60;600\n    @v=@pix(y*800+x)\n  else\n    int vv=0xffffffff 'value when out of bounds\n    @v=@vv\n  end if\nend macro\n'\n'TEST\npix2d(1,20)=0x77aabbcc\nprint hex pix2d(1,20)\nprint hex pix2d(800,10)",
"remarks":"implements in-line functions",
"related":"macros, macro__operators",
"group":"structures"
},
{
"id":"match",
"action":"match testing of symbol names",
"use":"to allow blocks of code to be included or omitted at compile time",
"example":"#if leftmatch X, \"vector\"\n  'X must be vector\n  #include \"mathutil.inc\"\n#endif",
"remarks":"generally for use inside macros",
"related":"leftmatch, rightmatch, anymatch, #if, #elseif, #else, #endif, typeof, typecodeof, def, macro",
"group":"meta control",
"title":"match"
},
{
"id":"mbox",
"action":"display message null-terminated ascii string",
"use":"mbox String-expression",
"example":"mbox \"Value \" v",
"remarks":"unlike <b>print<\/b>, <b>mbox<\/b> does not check the expression-type so\nit is impertant to start with a string or char expression",
"related":"print, str",
"group":"low level functions"
},
{
"id":"method",
"use":"define a procedure for objects.",
"example":"method triple(int i) as int\n  return i*3\nend method",
"remarks":"Any function or sub defined inside a \nclass\/methods block are treated as methods\nof the class, unless it is 'static'",
"related":"Procedures, function, sub, methods, subroutine",
"group":"procedures"
},
{
"id":"methods",
"action":"start a methods block for a class of objects.",
"related":"method, class",
"group":"structures"
},
{
"id":"mid__command",
"action":"patches string2 into string1 as position",
"use":"mid(string1,position)=string2 : mid string1,position,string2",
"example":"s=\"abcdef\" : mid s,2,\"BC\"",
"result":"s=\"aBCdef\"",
"related":"mid__function, left, ltrim, rtrim",
"group":"string command",
"title":"mid command"
},
{
"id":"mid__function",
"action":"returns part of string1 at position with length",
"use":"string=mid string1, position, length 'if length is omitted then the rest of string1 is returned",
"example":"s=mid \"abcdef\",3 : t=mid \"abcdef\",3,2",
"result":"s=\"cdef\" : t=\"cd\"",
"remarks":"also works with untyped pointers",
"related":"left, ltrim, rtrim, instr, mid__command",
"group":"string functions",
"title":"mid function"
},
{
"id":"mod",
"action":"returns the remainder of first value divided by the second value",
"use":"modulus=mod(value1,value2)",
"example":"m=mod(83.5, 10)",
"result":"m=3.5",
"related":"round, trunc, floor, ceil, frac, abs",
"group":"floating point macros"
},
{
"id":"module",
"action":"define a module block",
"use":"create a block of deployable code",
"example":"===============\nmodule 'console\n===============\n  namespace cons\n  uses console 'inc\\console.inc'\n  end namespace\n  '\n  interface\n  ---------\n  $ cprint  cons::output \n  $ cwait   cons::getkey\n  $ tab     cons::tab\n  $ cr      cons::cr\nend module\n'\ncprint 12345 tab \"okay\" cr\ncwait\n",
"remarks":"'Module' is currently a null definition. It can be redefined\nin macro form to generate custom code. To customize\n'end module' create a macro called module_end'.",
"related":"interface, namespace",
"group":"structures"
},
{
"id":"ms64",
"action":"determines how parameters are passed on the stack   ",
"use":"declaring external functions, and variadic functions",
"remarks":"this is the default Windows calling convention on 64bit platforms.\nThe first four parameters are passed in registers. \nThe stack is cleaned up after the call by the caller.",
"related":"calling_conventions, stdcall, cdecl, pascal",
"group":"calling conventions"
},
{
"id":"namespace",
"action":"create a namspace",
"use":"create a region where symbols are locally defined",
"example":"'\n'SIMPLE NAMESPACE\ndim int x=1\nnamespace a\n  dim int x=21\nend namespace\nprint x '1\nprint a..x '21\n'\n'NESTABLE NAMESPACES\ndim int x=1\nnamespace a\n  dim int x=21\n  namespace b\n    namespace c\n      print x '21\n      dim int x=56\n    end namespace\n  end namespace\n  print x '21\nend namespace\n'\nnamespace a::b::c\n  print x '56\nend namespace\n'\nprint a::b::c::x '56\nprint a::x '21\nprint x '1b",
"remarks":"Namespaces allow blocks of code to be ported\nfrom one program to another without causing symbol conflicts.",
"related":"scope, macro, def, module",
"group":"structures"
},
{
"id":"new",
"action":"create a dynamic object and call its constructor method.",
"use":"to create and initialise objects",
"example":"'  \n'creating object cuboid in dynamic space\nnew shape cuboid(1,1,1)\n'\n'creating object cuboid on the stack\nnew shape cuboid(1.0, 2.0, 1.0) local\n'\n'creating object cuboid in global or static space\nnew shape cuboid(1.0, 1.5, 1.0) static\n'",
"related":"classes, type, del, dim",
"group":"system macro"
},
{
"id":"news",
"action":"allocates a bstring of null characters given the length in bytes",
"use":"bstring=news length",
"example":"b=news 1000\n'...\nfrees b",
"result":"b contains address of a string of 1000 nul characters . Then the sting is freed",
"remarks":"Oxygen strings are automatically freed but Bstrings must be explicitly freed when no longer needed.",
"related":"frees, nuls, space, bstring, getmemory",
"group":"memory functions"
},
{
"id":"next",
"action":"end iteration block",
"related":"Iteration, for, to, step",
"group":"control structures"
},
{
"id":"not__bits",
"action":"inverts bits",
"use":"invert bits of variable or expression",
"example":"int b=0x55 : a=not(b) 'bitwise inversion a=0xaa",
"related":"not__conditional, true, false",
"group":"operators"
},
{
"id":"not__conditional",
"action":"invert conditional logic",
"use":"inversion of condition",
"example":"'if not a>42 then' ...  'if a<=42 then'",
"remarks":"'not' inverts the outcome of the rest of the conditional expression",
"related":"true, false, not__bits",
"group":"operators"
},
{
"id":"null",
"action":"force pointer value to be 0",
"use":"passing 0 as a string or structure pointer",
"example":"ofn.lpstrFileTitle = null\n MessageBox null,\"text\",\"title\",0",
"remarks":"When used as a parameter, null is equivalent to <b>byval 0<\/b>.",
"related":"byval",
"group":"misc"
},
{
"id":"nuls",
"action":"returns the address of a string of null characters given the length.",
"use":"string=nuls length",
"example":"s=nuls 1000",
"result":"s is a string of 1000 null characters",
"remarks":"for wide strings use string(n,wchr 0) instead",
"related":"space, string, news, frees, getmemory",
"group":"string functions"
},
{
"id":"numberformat",
"action":"control how numbers are converted to strings",
"use":"change the format of numbers",
"example":"numberformat 3,0,0,0 : print 3.14159\n'result: 3.142",
"remarks":"there are 6 parameters:\n1 decimal places (0..16)\n2 strip trailing zeros (0 or 1)\n3 always use scientic notation E format (0 or 1)\n4 suppress 0 before decimal point: 0.1 becomes .1 (0 or 1)\n5 insert extra leading space for non-negative numbers (0 or 1)\n6 width allocated before decimal point: (0..31)\n  (inserting lead padding spaces)\n\nwhen no parameters are given, it reverts to the default settings:\n16,1,0,0,0,0\nrounding is automatically performed before the decimal places are truncated.",
"related":"print, frac, float",
"group":"directives"
},
{
"id":"o2",
"action":"start a block of o2 machine code notation",
"use":"inserting inline machine code and other binary data.\ndirect use of o2 language (used by the o2 linker)",
"example":"o2 b8 00 01 00 00 'machine code for mov eax,256",
"related":"Blocks",
"group":"commands"
},
{
"id":"o2version",
"action":"returns current version number.",
"use":"version matching ",
"example":"$ rtlversion \"0.2.1\"\n'\n#if not match(rtlversion,o2version)\n  #error \"RTL version mismatches o2 version \"+o2version\n#endif",
"related":"version",
"group":"info string"
},
{
"id":"offsetof",
"action":"return offset of variable from index register",
"use":"nbytes=offsetof variable",
"example":"n=offsetof a",
"related":"sizeof, spanof, typeof, typecodeof, recordof",
"group":"attributes"
},
{
"id":"on",
"action":"on x goto \/ gosub \/ call { list }",
"use":"branch to an address using a list of locations",
"example":"procedure f(int isr)\n  subroutine sr1\n    ...\n  end subroutine\n  subroutine sr2\n    ...\n  end subroutine\n  subroutine sr3\n    ...\n  end subroutine\n  '\n  on isr gosub {@sr1,@sr2,@sr3}\n  '\nend procedure",
"remarks":"lists of up to 128 suroutines are supported",
"related":"Procedures ,subroutine, label, gosub, call, goto",
"group":"macro"
},
{
"id":"once",
"action":"ensures that a file is included in the\n        source code once only.",
"example":"#include once \"..\/..\/MinWin.inc\"",
"related":"include, #include, includepath",
"group":"secondary keyword"
},
{
"id":"operator",
"action":"define a customised operator",
"use":"for operations between objects and other user defined types",
"example":"operator max 1 'name and precedence level\n'\ntype hInt int v\n'\nmacro hInt_\"move\"(a,b)\n  a.v=b.v\nend macro\nmacro hInt_\"max\"(acc,a,b)\n  if b.v>a.v\n    acc.v=b.v\n  else\n    acc.v=a.v\n  endif\nend macro\n'\nhInt a,b,c,d\na.v=1 : b.v=10 : c.v=-10\nd=a max b max c\nprint d.v '10\n",
"related":"type, class, macro",
"group":"operators"
},
{
"id":"or",
"same":"|",
"remarks":"bitwise operator",
"related":"and, or=, xor, operators",
"group":"operators"
},
{
"id":"or=",
"same":"|=",
"remarks":"bitwise assign operator",
"related":"and, or, xor, operators",
"group":"operators"
},
{
"id":"packed",
"action":"prevent padding between members of a <b>type<\/b> or <b>typedef<\/b>",
"use":"allow programmer to have full control over padding to align the members",
"example":"packed type point\n  word x,y,z\n  dword color\nend type\n\npacked type point\n  word x,y,z\n  align 4\n  dword color\nend type",
"remarks":"By default, the members will be aligned to a boundary matching their size.",
"related":"type, typedef, struct",
"group":"commands"
},
{
"id":"pascal",
"action":"determines how parameters are passed on the stack   ",
"use":"declaring external functions",
"example":"! Sleep lib \"kernel32.dll\" stdcall (int msec)",
"remarks":"this is a legacy calling convention on 32bit platforms.",
"related":"calling_conventions, stdcall, cdecl, ms64",
"group":"calling conventions"
},
{
"id":"pi",
"action":"returns pi, the ratio of the circumference of a circle to its diameter",
"use":"p=pi ' or pi()",
"example":"p=pi*2",
"result":"p=6.283185...",
"related":"tan, atan",
"group":"floating point macros"
},
{
"id":"pow",
"action":"returns the value of the first value to the power of the second value",
"use":"a=pow(value,exponent)",
"example":"a=pow(2,3)",
"result":"a=8",
"remarks":"this is equivalent to 2^3",
"related":"log, logn",
"group":"floating point macros"
},
{
"id":"print",
"action":"Displays strings and numbers",
"use":"print String : print Number",
"example":"print \"ABC\" : print 123 : print \"ABC: \" 123 \" DEF: \" 456",
"result":"ABC\n123\nABC: 123 DEF: 456",
"remarks":"strings can be combined with numbers as sys as the first element is a string",
"related":"val, str, hex, putfile, getfile",
"group":"string functions"
},
{
"id":"private",
"use":"determines the scope of a class member",
"remarks":"this term is now ignored in class definitions",
"related":"protected, public",
"group":"classes"
},
{
"id":"protected",
"use":"determines the scope of a class member",
"remarks":"this term is now ignored in class definitions",
"related":"public, private",
"group":"classes"
},
{
"id":"prototypeof",
"action":"return prototype(s) of functions, subs and high level macros",
"use":"obtain data for diagnostics or reflective programming",
"related":"recordof, sizeof, offsetof, spanof, typeof, typecoedof, #recordof",
"group":"attributes"
},
{
"id":"public",
"use":"determines the scope of a class member",
"remarks":"this term is now ignored in class definitions",
"related":"protected, private",
"group":"classes"
},
{
"id":"putfile",
"action":"saves a string to a file",
"use":"putfile FileName, String",
"example":"putfile \"t.txt\",\"Hello\"",
"result":"A file named \"t.xt\" is created or overwritten containing \"Hello\"",
"related":"getfile, print",
"group":"string functions"
},
{
"id":"quad",
"use":"specify a double precision signed integer (64 bits wide)",
"example":"quad q",
"remarks":"In a 64 bit system, these are processed directly on the CPU.\nIn a 32 bit system, quads are passed to the FPU for processing",
"related":"qword, int, short, sbyte types",
"group":"primitive types"
},
{
"id":"quote",
"action":"specify tagname for superquotes",
"use":"supports almost unlimited nesting of quotes. Can be used for containing\nembedded scripts which themselves use quotes and have different syntax.",
"example":"quote !!! this quote contains other quotes \"containing \"other quotes\"   \" !!!",
"related":"\"    `",
"group":"commands"
},
{
"id":"qword",
"use":"specify a 64 bit operand in assembly code",
"example":"fld qword d",
"remarks":"Only used in assembly code, not Basic.",
"related":"integer, quad, types",
"group":"primitive types"
},
{
"id":"rad",
"action":"returns value in radians, given degrees",
"use":"radians=rad(degrees)",
"example":"v=rad(180)",
"result":"v=pi",
"related":"deg, pi",
"group":"floating point macros"
},
{
"id":"recip",
"action":"returns reciprocal of value: a=1\/v",
"use":"reciprocal=recip(value)",
"example":"a=recip(5\/4)",
"result":"a=0.8",
"related":"sqr, mod, round, pow, log",
"group":"floating point macros"
},
{
"id":"recordof",
"action":"return record of compound (UDT) variable",
"use":"obtain data for diagnostics or reflective programming",
"example":"type vt long v,double d\ndim as vt v :  r=recordof v",
"result":"r=\"\nv 0 4 1 A0 , long\nd 4 4 1 A0 , double\n\"",
"remarks":"use #recordof to display the record during compilation.",
"related":"#recordof prototypeof, sizeof, offsetof, spanof, typeof, typecodeof, #recordof",
"group":"attributes"
},
{
"id":"redim",
"action":"create or resize a dynamic array, preserving contents within range",
"use":"extend or reduce an array size at run-time",
"example":"redim string s(n)\nredim string s(1000)\nredim string s(100) clear\nint y=100, x=100\nredim int a2d (y,x)\n\n'use [redim] when passing to a procedure:\n\nsub f(int *fa2d[redim], int y, x)\n  redim fa2d(y,x)\nend sub\n...\ndel a2d",
"remarks":"The remaining element values are preserved unless\nthe 'clear' directive is given.\n\nredim cannot be directly used inside a Type or Class.",
"related":"remap, dim, dyn, lbound, ubound, del, new, indexbase",
"group":"system macro"
},
{
"id":"reindex",
"action":"create an index for a data array",
"use":"filter and index a set of data, with user-defined criteria",
"example":"uses console\nint d={8,9,6,7,4,5,2,3,0,1}\nint m=10\n'\nmacro filter(r,i)\nif d[i]>=5\n  r=1\nendif\nend macro\n'\nmacro compare(r,i,j)\nif d[i]>d[j] 'ascending\n'if d[i]<d[j] 'descending\n  r=1\nendif\nend macro\n'\nreindex idx,m,n,filter,compare\n'\nprint \"total \" n cr cr\nint i,j\nfor i=indexbase to n+indexbase-1\n  j=idx[i]\n  print i tab j tab d[j] cr\nnext\nprint cr cr\ndel idx\nwait",
"group":"system macro"
},
{
"id":"remap",
"action":"overlay a dynamic array or memory space",
"use":"map an array onto any memory location",
"example":"string s = nuls(10000)  \nremap byte bt(100,100)\n@bt = strptr(s)\n'\nsys p=getmemory 10000\n@bt=p\n",
"remarks":"",
"related":"redim, dim, lbound, ubound, getmemory, indexbase",
"group":"system macro"
},
{
"id":"repeat",
"same":"redo, continue",
"action":"goto the beginning of a do\/while block ",
"example":"'\ndo\n  if a>b\n    repeat do\n    'same as continue do\n  else\n    exit do\nloop\n'\n'conditional repeating\ndo\n  ...\n  repeat while a>b\n  repeat when a>b\n  repeat until a>b\n  repeat if a>b\n  exit loop\nloop\n'\n'structured assembler repeat\n(\n ...\n dec ecx\n jle exit\n repeat\n)",
"related":"Loops, do, continue, exit\nexit, do, while, if, for",
"group":"control structures"
},
{
"id":"retn",
"action":"macro ret n. Releases correct number of bytes at end of procedure (in stdcall convention)",
"use":"internal",
"related":"ret, return, function",
"group":"commands"
},
{
"id":"return",
"action":"exit from a procedure returning a value (in a function or method)",
"example":"float product(float a,b) { return a*b }",
"related":"Procedures, ret",
"group":"procedures"
},
{
"id":"right",
"action":"returns right part of a string by length",
"use":"string=right(sourcestring, length)",
"example":"s=right(\"abcdef\",3)",
"result":"s=\"def\"",
"related":"left, mid, ltrim, rtrim",
"group":"system macro"
},
{
"id":"rightmatch",
"action":"match testing of symbol names",
"use":"to allow blocks of code to be included or omitted at compile time",
"example":"#if rightmatch X, \"Vec\"\n  'X could be aVec bVec FloatVec\n  #include \"mathutil.inc\"\n#endif",
"remarks":"generally for use inside macros",
"related":"match, leftmatch, anymatch, #if, #elseif, #else, #endif, typeof, typecodeof, def, macro",
"group":"meta control",
"title":"rightmatch"
},
{
"id":"round",
"action":"returns a value rounded to the nearest whole number (rounded up or down)",
"use":"WholeNumber=round(number)",
"example":"m=round(1.49) : n=round(1.5)",
"result":"m=1 : n=2",
"related":"frac, trunc, floor, ceil, mod, abs",
"group":"floating point macros"
},
{
"id":"rpartof",
"action":"return mid part of dotted name",
"use":"exract part from dotted name, for use\nin macros.",
"example":"rpartof(a.b.c) 'returns b.c",
"related":"lpartof, vtypeof",
"group":"attributes"
},
{
"id":"rtrim",
"action":"returns string with white space on the right trimmed off",
"use":"string=rtrim(string)",
"example":"s=rtrim \"abc   \"",
"result":"s=\"abc\"",
"related":"ltrim, space, str, lcase, ucase",
"group":"string functions"
},
{
"id":"sbyte",
"use":"specify a signed byte type (8 bits wide)",
"example":"sbyte x=-10",
"remarks":"limited to values ranging from -128 to 127 \/ 0x80 to 0x7F",
"related":"types",
"group":"primitive types"
},
{
"id":"scaler",
"action":"specifies step size of an array dimension",
"use":"calculating a position offset in the array",
"example":"indexbase 1 'default\n#majorminor 'default dimension order\ndim int a(200,10)\nprint scaler(a,1) '10\nprint scaler(a,2) '1",
"related":"dims, lbound, strider, dim, redim",
"group":"system macro"
},
{
"id":"scope",
"action":"start a scope",
"use":"create a block where variables and functions may be locally defined",
"example":":",
"incstring1":"\n  sys i=4\n\n  scope\n    sys i=8\n    'print \"inner scope i=\" i\n  end scope\n\n\n  '-----------------\n  'EQUIVALENT SYNTAX\n  '=================\n\n  scope\n  {\n    sys i=8\n   ' print \"inner scope i=\" i\n  }\n\n\n  (\n    sys i=8\n    'print \"inner scope i=\" i\n  )\n\n\n\n  print \"outer scope i=\" i 'i=4",
"remarks":"when the scope ends any definitions created within the scope will\nbe forgotten. The compiler   will dump all symbols created inside the scope.\nThis promotes compiler efficiency.",
"related":"Blocks, namespace",
"group":"structures"
},
{
"id":"select",
"action":"Start a Case block (C style)",
"related":"Selection, case, endselect, end",
"group":"control structures"
},
{
"id":"sgn",
"action":"returns -1 for negative values, 0 for zero and 1 for positive values",
"use":"extract the sign of a number",
"example":"a=sgn(-42)",
"result":"a=-1",
"related":"abs, frac, round, mod",
"group":"floating point macros"
},
{
"id":"short",
"use":"specify a short integer (16 bits wide). Also used in conjunction\nwith other types to halve the bit width",
"example":"short a\nshort int b\nshort short c 'an sbyte",
"related":"long, types",
"group":"primitive types"
},
{
"id":"signed",
"action":"specifies the type to be of signed integer",
"use":"signed type variable",
"example":"signed int v",
"result":"a signed int (long) called v is created.",
"related":"unsigned, int, long, types",
"group":"primitive types"
},
{
"id":"sin",
"action":"returns the sine of a value given in radians",
"use":"Sine=sin(Radians)",
"example":"v=sin(pi\/6)",
"result":"v=0.5",
"related":"asin, cos, tan",
"group":"floating point macros"
},
{
"id":"single",
"use":"specify a floating point variable (32 bits wide)",
"example":"single f=1\/100",
"remarks":"same as float",
"related":"float, double, extended, types",
"group":"primitive types"
},
{
"id":"sizeof",
"action":"return length of variable element (in bytes)",
"use":"nbytes=sizeof variable",
"example":"n=sizeof a",
"related":"offsetof, spanof, typeof typecodeof",
"group":"attributes"
},
{
"id":"space",
"action":"returns a string of spaces",
"use":"string=space length",
"example":"s=space 10",
"result":"s=\"  \" ' 10 spaces (ascii 32)",
"remarks":"for wide strings use string(n,wchr 32) instead",
"related":"nuls, string, ltrim, rtrim",
"group":"string functions"
},
{
"id":"spanof",
"same":"countof",
"action":"return span of array variable dimension",
"use":"nbytes=spanof variable dimension",
"example":"dim as long v(10) : n=spanof v",
"result":"n=10",
"related":"sizeof, bytesof,offsetof, typeof, typecodeof, recordof",
"group":"attributes"
},
{
"id":"sqr",
"action":"returns the square root of a value",
"use":"SquareRoot=sqr(value)",
"example":"v=sqr(9)",
"result":"3",
"remarks":"sqr and sqrt are the same",
"related":"pow, log, hypot",
"group":"floating point macros"
},
{
"id":"sqrt",
"action":"returns the square root of a value",
"use":"SquareRoot=sqr(value)",
"example":"v=sqr(9)",
"result":"3",
"remarks":"sqr and sqrt are the same",
"related":"pow, log, hypot",
"group":"floating point macros"
},
{
"id":"static",
"action":"define a static set of variables, (persistant but invisible outsid the block)",
"example":"static string s",
"related":"dim, local",
"group":"keywords"
},
{
"id":"stdcall",
"action":"determines how parameters are passed on the stack   ",
"use":"declaring external functions",
"example":"! Sleep lib \"kernel32.dll\" stdcall (int msec)",
"remarks":"this is the default calling convention on 32bit Windows platforms.",
"related":"calling_conventions, cdecl, ms64, pascal",
"group":"calling conventions"
},
{
"id":"step",
"action":"specify increment of an iteration",
"use":"for iterator = start to end step step increment",
"example":"for i=1 to 10 step 2 : ... : next",
"result":"i increeases by 2 with each cycle : 1 3 5 7 9",
"related":"Iteration, for, to, next",
"group":"control structures"
},
{
"id":"str",
"action":"returns string representation of number",
"use":"String=str(value)",
"example":"s=str(-1.23456)   ' result: -1.23456\ns=str(-1.23456,3) ' result: -1.235",
"remarks":"rounding is automatically applied before decimal places are truncated.",
"related":"hex, val",
"group":"string functions"
},
{
"id":"stretch",
"action":"resize a low-level dynamic array",
"use":"to resize a dyn array at run-time",
"example":"int n=64\ndyn string s(n)\n...\nstretch s(n+32)\n...\ndel s 'or freememory @s",
"remarks":"The array contents are preserved, except\nwhen the array size is reduced.",
"related":"dyn, redim remap, del",
"group":"system macro"
},
{
"id":"strider",
"action":"specifies step size of an array dimension",
"use":"calculating a position offset in the array",
"example":"indexbase 1 'default\n#majorminor 'default dimension order\ndim int a(200,10)\nprint strider(a,1) '40\nprint strider(a,2) '4",
"related":"dims, lbound, scaler, dim, redim",
"group":"system macro"
},
{
"id":"string",
"use":"specify a string type with 8-bit characters",
"example":"string s=\"name: \"",
"remarks":"strings are automatically destroyed when out of scope.",
"related":"wstring, types",
"group":"primitive types"
},
{
"id":"string",
"action":"returns a string of characters",
"use":"string=string(length,character)",
"example":"string=string(4,\"a\")",
"result":"s=\"aaaa\"",
"related":"space, nuls, asc",
"group":"string functions"
},
{
"id":"strptr",
"action":"return a string pointer",
"use":"obtain base address of string contents",
"example":"string s=\"Hello\"\nsys a=strptr s",
"related":"typecodeof, addr",
"group":"attributes"
},
{
"id":"struct",
"action":"define a compound variable type (C Syntax)",
"example":"struct rgbacolor\n{\n  red   as byte\n  green as byte\n  blue  as byte\n  alpha as byte\n}",
"related":"type, typedef, class",
"group":"commands"
},
{
"id":"structureof",
"action":"return data structure of compund (UDT) or variabe",
"use":"obtain data for diagnostics or reflective programming",
"example":"type vt long v,double d\ndim as vt v :  r=recordof v",
"result":"r=\"\nv 0 4 1 A0 , long\nd 4 4 1 A0 , double\n\"",
"related":"prototypeof sizeof, offsetof, spanof, typeof, typecodeof, recordof, #recordof",
"group":"attributes"
},
{
"id":"sub",
"same":"procedure",
"action":"define a procedure. (like a function but not returning a value)",
"example":"sub triple(j as int ptr)\n  j=i*3\nend sub\nint v=3\ntriple(v) '9",
"related":"Procedures, function, method, subroutine",
"group":"procedures"
},
{
"id":"subroutine",
"action":"define a subroutine block (for gosub)",
"example":"subroutine triple\n  j*=3\n  'exit subroutine\nend subroutine\n'\nj=12 : gosub triple '36\n'",
"remarks":"A more structured and  scoped target for gosub. ",
"related":"labels, Procedures, function, method",
"group":"procedures"
},
{
"id":"subroutine",
"action":"define a subroutine",
"use":"formally define subroutines inside a procedure",
"example":"procedure pr(int i)\n  gosub xx\n  print \"ending pr\"\n  '\n  subroutine xx\n    if i<1\n      exit subroutine\n    endif\n    print i\n  end subroutine\nend procedure",
"remarks":"subroutines always terminate with 'end subroutine'",
"related":"Procedures ,gosub, call, goto",
"group":"procedures"
},
{
"id":"switch",
"action":"Start a Case block (C style)",
"related":"Selection, case, endselect, end",
"group":"control structures"
},
{
"id":"sys",
"use":"specify a signed integer of system width (32\/64 bits wide)",
"example":"sys i=42",
"remarks":"this type is always wide enough to hold a pointer.",
"related":"any, int, quad, types",
"group":"primitive types"
},
{
"id":"tan",
"action":"returns the tangent of a value given in radians",
"use":"tangent=tan(radians)",
"example":"t=tan(a)",
"result":"t= ratio y\/x",
"related":"atan, atn, sin, cos",
"group":"floating point macros"
},
{
"id":"terminate",
"action":"Deallocate all Strings, static variables and free DLL libraries (at end of program).\nThis is automatically appended unless it is detected in the program.\nIt is composed of the three macros below: FreeLibs FreeStrings. If either\nof these are used then Terminate itself will not be automatically appended.",
"use":"explicit termination of program",
"example":"terminate",
"related":"freestrings, freelibs",
"group":"system macro"
},
{
"id":"that",
"action":"suppress automatic \"this\" prefix inside OOP methods",
"use":"resolving name conflict between an object member and another variable",
"example":"this.voice=that voice\nvoice=that voice",
"related":"method, this",
"group":"Objects"
},
{
"id":"then",
"action":"starts the conditional block where the prior test is met.",
"use":"conditional execution",
"example":"'single line\nif a>b then print a\n'\n'multi-line\nif a>b then\n  print a\nendif       ",
"remarks":"'then' is optional in mult-line blocks",
"related":"Conditionals, if, elseif, endif",
"group":"control structures"
},
{
"id":"this",
"action":"explicitly refer to an object's own members",
"use":"distinguish a member from a local variable, param or function of the same name",
"example":"this.len=len(s)",
"related":"method, class, that",
"group":"Objects"
},
{
"id":"to",
"action":"specify limit of an iteration",
"related":"Iteration, for, step, next",
"group":"control structures"
},
{
"id":"true",
"action":"insert -1",
"use":"universal value for boolean true",
"example":"int a=true",
"related":"false, not__bits, not__conditional",
"group":"system macro"
},
{
"id":"trunc",
"action":"truncate the fractional part of a value and return it",
"use":"IntegerValue=trunc(FloatValue)",
"example":"i=trunc(123.456)",
"result":"i=123",
"related":"round, floor, ceil, frac",
"group":"floating point macros"
},
{
"id":"type",
"action":"define a compound variable type",
"example":"type rgbacolor\n  red   as byte\n  green as byte\n  blue  as byte\n  alpha as byte\nend type\n\nrgbacolor c\nc.red=100 : c.green=50 : c.blue=100\n",
"related":"typedef, struct, class",
"group":"commands"
},
{
"id":"type",
"action":"define a compound structure for variables",
"use":"User defined types (UDT)",
"incstring1":"\n'--------------\n'COMPOUND TYPES\n'==============\n\n  type color32\n  \n    r as byte\n    g as byte\n    b as byte\n    a as byte\n    =\n    rgba as long  'UNION\n    \n  end type\n\n'-------------\n'DERIVED TYPE:\n'=============\n  \n  type colortext\n  \n    txt as string\n    c as color32\n    \n  end type\n\n  \n  \n  dim t as colortext\n  \n  t.txt=`Color code `\n  t.c.r=08  '0x08\n  t.c.g=16  '0x10 \n  t.c.b=32  '0x20\n  t.c.a=64  '0x40\n  \n  print t.txt hex t.c.rgba\n\n\n'print \"STRUCTURE:\n'\" structureof color32\n\n\n'-----------------\n'SYNTAX VARIATIONS\n'=================\n\n  type color32\n    byte r\n    byte g\n    byte b\n    byte a\n    =\n    long rgba  'UNION    \n  end type\n\n\n  type color32\n    byte r,g,b,a\n    =\n    long rgba  'UNION    \n  end type \n\n\n  type color32 byte r,g,b,a = long rgba\n\n  type colortext string txt,color32 c\n\n  struct color32 { \n    byte r,g,b,a\n   =\n   long rgba\n  }\n\n  typedef struct _color32 { \n    byte r,g,b,a\n   =\n   long rgba\n  } color32, *pcolor32\n\n  typedef struct _color32 {\n    union { \n      struct {\n        byte r,g,b,a\n      }\n      long rgba\n    }  \n  } color32, *pcolor32\n\n\n\n  '#recordof color32\n  '#recordof _color32\n  '#recordof colortext\n ",
"remarks":"type is now synonymous with class, and can\ncontain functions\/methods",
"related":"structures, classes, class",
"group":"compound structures"
},
{
"id":"typecodeof",
"action":"return type code number of variables and literals.",
"use":"obtain data for diagnostics or reflective programming",
"example":"#if typecodeof(A) > 0\n  #print \"A type: \" + typeof(A) ' int\n#endif",
"related":"typeof recordof, sizeof, offsetof, spanof, prototypeof, #recordof",
"group":"attributes"
},
{
"id":"typedef",
"action":"define a set of types (C syntax)",
"use":"create type definitions for creating other types",
"example":"typedef Double *pDouble\n\n'CREATE TYPES FROM ANONYMOUS STRUCT\n\ntypedef struct\n {\n   single x;\n   single y;\n   single z;\n } vector, *pVector;\n\n 'CREATE VARIABLE\n\n vector v;\n\n v.x=42.01\n\n 'FROM WINBASE.H:\n '\n typedef struct _OVERLAPPED {\n     ULONG_PTR Internal;\n     ULONG_PTR InternalHigh;\n     union {\n         struct {\n     DWORD Offset;\n     DWORD OffsetHigh;\n         };\n\n         PVOID Pointer;\n     };\n\n     HANDLE  hEvent;\n } OVERLAPPED, *LPOVERLAPPED;\n",
"related":"type, struct, class, union, enum",
"group":"commands"
},
{
"id":"typeof",
"action":"return name of the variable type",
"use":"name=typeof variable",
"example":"dim as long v : s=typeof v",
"result":"s=\"long\"",
"related":"typecodeof sizeof, offsetof, spanof, recordof",
"group":"attributes"
},
{
"id":"ubound",
"action":"specifies max index of an array dimension",
"use":"checking array limits",
"example":"indexbase 1 'default\ndim int a(200,10)\nprint ubound(a) '2000\nprint ubound(a,1) '200\nprint ubound(a,2) '10",
"related":"dims, lbound, scaler, strider, dim, redim",
"group":"system macro"
},
{
"id":"ubyte",
"use":"specify a byte type (8 bits wide)",
"example":"ubyte semicolon=59",
"remarks":"limited to values 0..255 \/ 0x00 to 0xFF",
"related":"types",
"group":"primitive types"
},
{
"id":"ucase",
"action":"returns uppercase of string",
"use":"string=ucase(string)",
"example":"s=ucase \"abcdef\"",
"result":"s=\"ABCDEF\"",
"related":"lcase, ltrim, rtrim, asc",
"group":"string functions"
},
{
"id":"uint",
"use":"specify a long unsigned integer (32 bits wide)",
"example":"uint u=0xA0000000",
"remarks":"same as dword and ulong  ",
"related":"dword, word, byte, types",
"group":"primitive types"
},
{
"id":"ulong",
"use":"specify a long unsigned integer (32 bits wide)",
"example":"ulong u=0xA0000000",
"remarks":"same as uint  ",
"related":"uint, word, types",
"group":"primitive types"
},
{
"id":"undef",
"same":"#undef\n#undefine",
"action":"remove a previously defined symbol",
"use":"remove access to private symbols in a module.",
"example":"undef a,b,c,d",
"remarks":"will not work for procedures or labels.",
"related":"scope #define, def, deff, dim",
"group":"meta"
},
{
"id":"undefined",
"action":"test whether a symbol exists",
"use":"to allow blocks of code to be included or omitted at compile time",
"example":"#if undefined X\n  dim string X\n#endif",
"remarks":"generally for use inside macros",
"related":"defined, #ifdef, #ifndef, #if, #elseif, #else, #endif, def, macro",
"group":"meta control",
"title":"undefined"
},
{
"id":"unic",
"action":"returns encoding of a character in a wide string",
"use":"uni=unic(String,CharacterPosition)",
"example":"'as function:\na=unic(L\"ABCDEF\",2) 'a=0x0042\n'as pseudo-command:\nunic(s,2)=0x0062 's=L\"AbCDEF\"",
"related":"asc, wchr, chr, val, mid, len, str",
"group":"string functions"
},
{
"id":"union",
"action":"define a union (C syntax)",
"use":"allows different variables to occupy the same space.",
"example":"union utype\n{\n  byte  b\n  short w\n  long  i\n}\n\n\nutype v\n\nv.b=42",
"result":"v.b=42 : v.w=42 : v.i=42",
"remarks":"a union may also be nested inside a type.",
"related":"typedef, type, struct, class, enum",
"group":"commands"
},
{
"id":"unsigned",
"action":"specifies the type to be of positive numbers only",
"use":"unsigned type variable",
"example":"unsigned long v",
"result":"an unsigned long (dword) called v is created.",
"related":"signed, long, word, dword, types",
"group":"primitive types"
},
{
"id":"use",
"same":"uses\nusing",
"action":"include source code from another file",
"use":"for including header files and other files of source code",
"example":"uses RTL32 'include once \"RTL32.inc\"",
"remarks":"use, uses, using are equivalent",
"related":"include, includepath",
"group":"commands"
},
{
"id":"val",
"action":"returns numeric value of string",
"use":"value=val string",
"example":"v=val \"2.5\"",
"result":"v=2.5",
"related":"str hex asc",
"group":"string functions"
},
{
"id":"var",
"action":"define a set of variables",
"use":"low-level dimensioning of variables",
"example":"var string s,t,u(64),v  ",
"remarks":"var is normally only used internally. it accepts * for indirect variables\nand \"at\" for variable mapping. Arrays are also supported.",
"related":"dim",
"group":"commands"
},
{
"id":"version",
"action":"returns current version number and DateTimeStamp.",
"use":"identification of version",
"example":"print version",
"related":"o2version",
"group":"info string"
},
{
"id":"view",
"action":"Displays a variable's name and its value",
"example":"string  s=\"Helo\"\nview i\n'result: s    \"Helo\"",
"related":"print, mbox, #show, #view  ",
"group":"system macro"
},
{
"id":"virtual",
"same":"pure",
"remarks":"objects of virtual classes are usually created by some\nkind of server or class factory. The client only receives\na reference (pointer) to the object from the server and only knows\nhow to invoke its methods. It assumes no knowledge of its inner workings.",
"related":"com external export class\nextern, com, class",
"group":"classes"
},
{
"id":"void",
"use":"specify a null type",
"example":"'Variables:\nvoid * pv = getmemory(100 * sizeof float)\n...\nfreememory pv\n'\n'In function headers:\nfunction foo(byref v as void) as void ptr\nvoid* foo(void*v)\n\n'Procedures not returning a value:\nvoid foo()\n'",
"remarks":"Void cannot be used directly.",
"related":"sys, any, types",
"group":"primitive types"
},
{
"id":"vtypeof",
"action":"return typename of variable",
"use":"refer to variable type , for use\nin macros.",
"example":"double a\nvtypeof(a) 'returns double",
"related":"lpartof, rpartof, sizeof",
"group":"attributes"
},
{
"id":"wbstring",
"use":"specify a bstring type with 16-bit characters, supporting unicode",
"example":"wbstring sw\ngetfile \"greek.txt\",sw\n...\nfrees sw",
"remarks":"bstrings must be freed before going out of scope.",
"related":"bstring, types",
"group":"primitive types"
},
{
"id":"wchar",
"use":"specify a string of wide characters (16 bits wide)",
"example":"wchar w=\"world\"\nwchar buf[1024]\nbuf=w\nprint buf",
"related":"char, types",
"group":"primitive types"
},
{
"id":"wchr",
"action":"returns wide string of a 2 byte character (encoding 0..65535 \/ 0xffff)",
"use":"widestring=wchr(WideCharValue)",
"example":"wstring ws=wchr(65)",
"result":"ws contains unicode character 0x0041",
"remarks":"Can also be used as a pseudo-command like chr()",
"related":"unic, asc, mid, string",
"group":"string functions"
},
{
"id":"wend",
"same":"end while",
"action":"end a <b>while<\/b> block",
"related":"Loops, do, while, continue, exit",
"group":"control structures"
},
{
"id":"while",
"action":"start a block for conditional repetition",
"example":"a=0\nwhile a<4\n  a+=1\nwend",
"result":"a=4 '4 loops",
"remarks":"<b>while<\/b> is a combination of <b>do<\/b> and <b>if<\/b>.",
"related":"Loops, do, continue, exit, wend, enddo",
"group":"control structures"
},
{
"id":"wide",
"use":"specify a wide character string (16 bits wide). Also used in conjunction\nwith other types to double the bit width",
"example":"wide s\nwide char sw\nwide float fw 'a double precision float",
"related":"short, types",
"group":"primitive types"
},
{
"id":"with",
"action":"specify a variable name prefix for assignments",
"use":"Allows long names to be shortened when assigning values",
"example":"dim as vector4 vectorI\nwith vectorI : .x=1 : .y=0 : .z=13 : .w=0 : end with",
"group":"commands"
},
{
"id":"word",
"use":"specify a short unsigned integer (16 bits wide)",
"example":"word w=0xA000",
"related":"short, int, dword, types",
"group":"primitive types"
},
{
"id":"wstring",
"use":"specify a string type with 16-bit characters, supporting unicode",
"example":"wstring sw\ngetfile \"greek.txt\",sw",
"remarks":"strings are automatically destroyed when out of scope.",
"related":"unic, types",
"group":"primitive types"
},
{
"id":"wzstring",
"use":"specify a string of wide characters (16 bits wide)",
"example":"wzstring w=\"world\"\nwzstring buf[1024]\nbuf=w\nprint buf",
"related":"char, types",
"group":"primitive types"
},
{
"id":"xor",
"remarks":"bitwise operator",
"related":"and, or, xor=, operators",
"group":"operators"
},
{
"id":"xor=",
"remarks":"bitwise assign operator",
"related":"and, or, xor, operators",
"group":"operators"
},
{
"id":"zstring",
"use":"specify a string of ascii characters (8 bits wide)",
"example":"zstring w=\"world\"\nzstring buf[1024]\nbuf=w\nprint \"hello \"+buf",
"remarks":"similar to <b>C<\/b> char, but is not conflated with <b>byte<\/b> which is a numeric type",
"related":"wchar, types",
"group":"primitive types"
},
{
"id":"||",
"remarks":"logical operator",
"related":"&&, ||, ^^ operators",
"group":"operators"
},
{
"id":"||=",
"remarks":"logical assign operator",
"related":"&&, ||, ^^ operators",
"group":"operators"
}
];
