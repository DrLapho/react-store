Process:               AmazonConnections [27810]
Path:                  /usr/local/amazon/var/acme/session_agents/connections_disco_agent/webrequest/../webapp/AmazonConnections.app/Contents/MacOS/AmazonConnections
Identifier:            com.electron.amazonconnections
Version:               1.0.5 (1.0.5)
Code Type:             X86-64 (Native)
Parent Process:        Python [1016]
Responsible:           Python [1016]
User ID:               505

Date/Time:             2021-10-28 13:38:33.951 +0200
OS Version:            macOS 11.6 (20G165)
Report Version:        12
Bridge OS Version:     5.5 (18P4759a)
Anonymous UUID:        8E90FDC8-3E46-425A-BE89-62A9EB4BCE45

Sleep/Wake UUID:       621DD42E-2E92-4AEF-BB78-D9640A48C1E1

Time Awake Since Boot: 8100 seconds
Time Since Wake:       22 seconds

System Integrity Protection: enabled

Crashed Thread:        0  CrBrowserMain  Dispatch queue: com.apple.main-thread

Exception Type:        EXC_BAD_ACCESS (SIGSEGV)
Exception Codes:       KERN_INVALID_ADDRESS at 0x00000000000005ca
Exception Note:        EXC_CORPSE_NOTIFY

Termination Signal:    Segmentation fault: 11
Termination Reason:    Namespace SIGNAL, Code 0xb
Terminating Process:   exc handler [27810]

VM Regions Near 0x5ca:
--> 
    __TEXT                      10ad3d000-10ad66000    [  164K] r-x/r-x SM=COW  /usr/local/amazon/var/acme/session_agents/connections_disco_agent/webapp/AmazonConnections.app/Contents/MacOS/AmazonConnections

Thread 0 Crashed:: CrBrowserMain  Dispatch queue: com.apple.main-thread
0   com.github.Electron.framework 	0x000000010cfc1d12 0x10ad6f000 + 35990802
1   com.github.Electron.framework 	0x000000010cfc1979 0x10ad6f000 + 35989881
2   com.github.Electron.framework 	0x000000010ae1b36e 0x10ad6f000 + 705390
3   com.github.Electron.framework 	0x000000010bb561d3 v8::internal::GlobalHandles::InvokeSecondPassPhantomCallbacksFromTask() + 419
4   com.github.Electron.framework 	0x0000000110669a4e 0x10ad6f000 + 93301326
5   com.github.Electron.framework 	0x0000000110668a4c 0x10ad6f000 + 93297228
6   com.github.Electron.framework 	0x0000000110669c80 0x10ad6f000 + 93301888
7   com.github.Electron.framework 	0x000000010ae4427f 0x10ad6f000 + 873087
8   com.github.Electron.framework 	0x000000010ae2f9f0 0x10ad6f000 + 788976
9   com.github.Electron.framework 	0x000000010c7ef881 0x10ad6f000 + 27789441
10  com.github.Electron.framework 	0x000000010c7f11a4 0x10ad6f000 + 27795876
11  com.github.Electron.framework 	0x000000010c7ecb56 0x10ad6f000 + 27777878
12  com.github.Electron.framework 	0x000000010c687ed4 0x10ad6f000 + 26316500
13  com.github.Electron.framework 	0x000000010c687bde 0x10ad6f000 + 26315742
14  com.github.Electron.framework 	0x000000010e8cf914 0x10ad6f000 + 62261524
15  com.github.Electron.framework 	0x000000010b945104 0x10ad6f000 + 12411140
16  com.github.Electron.framework 	0x000000010ad71914 ElectronMain + 84
17  com.electron.amazonconnections	0x000000010ad3d9b0 0x10ad3d000 + 2480
18  libdyld.dylib                 	0x00007fff20346f3d start + 1

Thread 1:
0   libsystem_pthread.dylib       	0x00007fff20327420 start_wqthread + 0

Thread 2:
0   libsystem_pthread.dylib       	0x00007fff20327420 start_wqthread + 0

Thread 3:
0   libsystem_pthread.dylib       	0x00007fff20327420 start_wqthread + 0

Thread 4:
0   libsystem_pthread.dylib       	0x00007fff20327420 start_wqthread + 0

Thread 5:
0   libsystem_pthread.dylib       	0x00007fff20327420 start_wqthread + 0

Thread 6:: ThreadPoolServiceThread
0   libsystem_kernel.dylib        	0x00007fff202ff1d2 kevent64 + 10
1   com.github.Electron.framework 	0x000000010d0336e1 0x10ad6f000 + 36456161
2   com.github.Electron.framework 	0x000000010d033576 0x10ad6f000 + 36455798
3   com.github.Electron.framework 	0x000000010cfd5b87 0x10ad6f000 + 36072327
4   com.github.Electron.framework 	0x000000010cfad357 0x10ad6f000 + 35906391
5   com.github.Electron.framework 	0x000000010cfddd94 0x10ad6f000 + 36105620
6   com.github.Electron.framework 	0x000000010cfec4f4 0x10ad6f000 + 36164852
7   com.github.Electron.framework 	0x000000010d01e097 0x10ad6f000 + 36368535
8   libsystem_pthread.dylib       	0x00007fff2032b8fc _pthread_start + 224
9   libsystem_pthread.dylib       	0x00007fff20327443 thread_start + 15

Thread 7:: ThreadPoolForegroundWorker
0   libsystem_kernel.dylib        	0x00007fff202f90c2 __rmdir + 10
1   libsystem_kernel.dylib        	0x00007fff202f90a1 rmdir + 11
2   com.github.Electron.framework 	0x000000010d018ef5 0x10ad6f000 + 36347637
3   com.github.Electron.framework 	0x000000010c7afcbd 0x10ad6f000 + 27528381
4   com.github.Electron.framework 	0x000000010c7b041e 0x10ad6f000 + 27530270
5   com.github.Electron.framework 	0x000000010cfc4f4f 0x10ad6f000 + 36003663
6   com.github.Electron.framework 	0x000000010cfdfeb2 0x10ad6f000 + 36114098
7   com.github.Electron.framework 	0x000000010cfdf988 0x10ad6f000 + 36112776
8   com.github.Electron.framework 	0x000000010d01dbdd 0x10ad6f000 + 36367325
9   com.github.Electron.framework 	0x000000010cfdf4d4 0x10ad6f000 + 36111572
10  com.github.Electron.framework 	0x000000010cfe702a 0x10ad6f000 + 36143146
11  com.github.Electron.framework 	0x000000010cfe6e54 0x10ad6f000 + 36142676
12  com.github.Electron.framework 	0x000000010d01e097 0x10ad6f000 + 36368535
13  libsystem_pthread.dylib       	0x00007fff2032b8fc _pthread_start + 224
14  libsystem_pthread.dylib       	0x00007fff20327443 thread_start + 15

Thread 8:: ThreadPoolBackgroundWorker
0   libsystem_kernel.dylib        	0x00007fff202f62ba mach_msg_trap + 10
1   libsystem_kernel.dylib        	0x00007fff202f662c mach_msg + 60
2   com.github.Electron.framework 	0x000000010d028c96 0x10ad6f000 + 36412566
3   com.github.Electron.framework 	0x000000010cfe68e8 0x10ad6f000 + 36141288
4   com.github.Electron.framework 	0x000000010cfe716a 0x10ad6f000 + 36143466
5   com.github.Electron.framework 	0x000000010cfe6dc4 0x10ad6f000 + 36142532
6   com.github.Electron.framework 	0x000000010d01e097 0x10ad6f000 + 36368535
7   libsystem_pthread.dylib       	0x00007fff2032b8fc _pthread_start + 224
8   libsystem_pthread.dylib       	0x00007fff20327443 thread_start + 15

Thread 9:: Chrome_IOThread
0   libsystem_kernel.dylib        	0x00007fff202ff1d2 kevent64 + 10
1   com.github.Electron.framework 	0x000000010d0336e1 0x10ad6f000 + 36456161
2   com.github.Electron.framework 	0x000000010d033576 0x10ad6f000 + 36455798
3   com.github.Electron.framework 	0x000000010cfd5b87 0x10ad6f000 + 36072327
4   com.github.Electron.framework 	0x000000010cfad357 0x10ad6f000 + 35906391
5   com.github.Electron.framework 	0x000000010c7f65d4 0x10ad6f000 + 27817428
6   com.github.Electron.framework 	0x000000010cfec4f4 0x10ad6f000 + 36164852
7   com.github.Electron.framework 	0x000000010d01e097 0x10ad6f000 + 36368535
8   libsystem_pthread.dylib       	0x00007fff2032b8fc _pthread_start + 224
9   libsystem_pthread.dylib       	0x00007fff20327443 thread_start + 15

Thread 10:
0   libsystem_kernel.dylib        	0x00007fff202fac4a kevent + 10
1   com.github.Electron.framework 	0x000000011070281a 0x10ad6f000 + 93927450
2   com.github.Electron.framework 	0x00000001106f1d61 uv_run + 497
3   com.github.Electron.framework 	0x000000011066a436 0x10ad6f000 + 93303862
4   libsystem_pthread.dylib       	0x00007fff2032b8fc _pthread_start + 224
5   libsystem_pthread.dylib       	0x00007fff20327443 thread_start + 15

Thread 11:
0   libsystem_kernel.dylib        	0x00007fff202f8cde __psynch_cvwait + 10
1   libsystem_pthread.dylib       	0x00007fff2032be49 _pthread_cond_wait + 1298
2   com.github.Electron.framework 	0x00000001106fd9a9 uv_cond_wait + 9
3   com.github.Electron.framework 	0x000000011066a638 0x10ad6f000 + 93304376
4   com.github.Electron.framework 	0x000000011066821b 0x10ad6f000 + 93295131
5   libsystem_pthread.dylib       	0x00007fff2032b8fc _pthread_start + 224
6   libsystem_pthread.dylib       	0x00007fff20327443 thread_start + 15

Thread 12:
0   libsystem_kernel.dylib        	0x00007fff202f8cde __psynch_cvwait + 10
1   libsystem_pthread.dylib       	0x00007fff2032be49 _pthread_cond_wait + 1298
2   com.github.Electron.framework 	0x00000001106fd9a9 uv_cond_wait + 9
3   com.github.Electron.framework 	0x000000011066a638 0x10ad6f000 + 93304376
4   com.github.Electron.framework 	0x000000011066821b 0x10ad6f000 + 93295131
5   libsystem_pthread.dylib       	0x00007fff2032b8fc _pthread_start + 224
6   libsystem_pthread.dylib       	0x00007fff20327443 thread_start + 15

Thread 13:
0   libsystem_kernel.dylib        	0x00007fff202f8cde __psynch_cvwait + 10
1   libsystem_pthread.dylib       	0x00007fff2032be49 _pthread_cond_wait + 1298
2   com.github.Electron.framework 	0x00000001106fd9a9 uv_cond_wait + 9
3   com.github.Electron.framework 	0x000000011066a638 0x10ad6f000 + 93304376
4   com.github.Electron.framework 	0x000000011066821b 0x10ad6f000 + 93295131
5   libsystem_pthread.dylib       	0x00007fff2032b8fc _pthread_start + 224
6   libsystem_pthread.dylib       	0x00007fff20327443 thread_start + 15

Thread 14:
0   libsystem_kernel.dylib        	0x00007fff202f62f6 semaphore_wait_trap + 10
1   com.github.Electron.framework 	0x00000001106fdf10 uv_sem_wait + 16
2   com.github.Electron.framework 	0x00000001106b5cc2 0x10ad6f000 + 93613250
3   libsystem_pthread.dylib       	0x00007fff2032b8fc _pthread_start + 224
4   libsystem_pthread.dylib       	0x00007fff20327443 thread_start + 15

Thread 15:
0   libsystem_kernel.dylib        	0x00007fff202f8cde __psynch_cvwait + 10
1   libsystem_pthread.dylib       	0x00007fff2032be49 _pthread_cond_wait + 1298
2   com.github.Electron.framework 	0x00000001106fd9a9 uv_cond_wait + 9
3   com.github.Electron.framework 	0x00000001106edbf9 0x10ad6f000 + 93842425
4   libsystem_pthread.dylib       	0x00007fff2032b8fc _pthread_start + 224
5   libsystem_pthread.dylib       	0x00007fff20327443 thread_start + 15

Thread 16:
0   libsystem_kernel.dylib        	0x00007fff202f8cde __psynch_cvwait + 10
1   libsystem_pthread.dylib       	0x00007fff2032be49 _pthread_cond_wait + 1298
2   com.github.Electron.framework 	0x00000001106fd9a9 uv_cond_wait + 9
3   com.github.Electron.framework 	0x00000001106edbf9 0x10ad6f000 + 93842425
4   libsystem_pthread.dylib       	0x00007fff2032b8fc _pthread_start + 224
5   libsystem_pthread.dylib       	0x00007fff20327443 thread_start + 15

Thread 17:
0   libsystem_kernel.dylib        	0x00007fff202f8cde __psynch_cvwait + 10
1   libsystem_pthread.dylib       	0x00007fff2032be49 _pthread_cond_wait + 1298
2   com.github.Electron.framework 	0x00000001106fd9a9 uv_cond_wait + 9
3   com.github.Electron.framework 	0x00000001106edbf9 0x10ad6f000 + 93842425
4   libsystem_pthread.dylib       	0x00007fff2032b8fc _pthread_start + 224
5   libsystem_pthread.dylib       	0x00007fff20327443 thread_start + 15

Thread 18:
0   libsystem_kernel.dylib        	0x00007fff202f8cde __psynch_cvwait + 10
1   libsystem_pthread.dylib       	0x00007fff2032be49 _pthread_cond_wait + 1298
2   com.github.Electron.framework 	0x00000001106fd9a9 uv_cond_wait + 9
3   com.github.Electron.framework 	0x00000001106edbf9 0x10ad6f000 + 93842425
4   libsystem_pthread.dylib       	0x00007fff2032b8fc _pthread_start + 224
5   libsystem_pthread.dylib       	0x00007fff20327443 thread_start + 15

Thread 19:: NetworkConfigWatcher
0   libsystem_kernel.dylib        	0x00007fff202f62ba mach_msg_trap + 10
1   libsystem_kernel.dylib        	0x00007fff202f662c mach_msg + 60
2   com.apple.CoreFoundation      	0x00007fff2042349f __CFRunLoopServiceMachPort + 316
3   com.apple.CoreFoundation      	0x00007fff20421b7f __CFRunLoopRun + 1328
4   com.apple.CoreFoundation      	0x00007fff20420f8c CFRunLoopRunSpecific + 563
5   com.apple.Foundation          	0x00007fff211b2607 -[NSRunLoop(NSRunLoop) runMode:beforeDate:] + 212
6   com.github.Electron.framework 	0x000000010d0243c1 0x10ad6f000 + 36393921
7   com.github.Electron.framework 	0x000000010d023122 0x10ad6f000 + 36389154
8   com.github.Electron.framework 	0x000000010cfd5b87 0x10ad6f000 + 36072327
9   com.github.Electron.framework 	0x000000010cfad357 0x10ad6f000 + 35906391
10  com.github.Electron.framework 	0x000000010cfec4f4 0x10ad6f000 + 36164852
11  com.github.Electron.framework 	0x000000010d01e097 0x10ad6f000 + 36368535
12  libsystem_pthread.dylib       	0x00007fff2032b8fc _pthread_start + 224
13  libsystem_pthread.dylib       	0x00007fff20327443 thread_start + 15

Thread 20:: CrShutdownDetector
0   libsystem_kernel.dylib        	0x00007fff202f6cce read + 10
1   com.github.Electron.framework 	0x000000010ae3066f 0x10ad6f000 + 792175
2   com.github.Electron.framework 	0x000000010d01e097 0x10ad6f000 + 36368535
3   libsystem_pthread.dylib       	0x00007fff2032b8fc _pthread_start + 224
4   libsystem_pthread.dylib       	0x00007fff20327443 thread_start + 15

Thread 21:: NetworkConfigWatcher
0   libsystem_kernel.dylib        	0x00007fff202f62ba mach_msg_trap + 10
1   libsystem_kernel.dylib        	0x00007fff202f662c mach_msg + 60
2   com.apple.CoreFoundation      	0x00007fff2042349f __CFRunLoopServiceMachPort + 316
3   com.apple.CoreFoundation      	0x00007fff20421b7f __CFRunLoopRun + 1328
4   com.apple.CoreFoundation      	0x00007fff20420f8c CFRunLoopRunSpecific + 563
5   com.apple.Foundation          	0x00007fff211b2607 -[NSRunLoop(NSRunLoop) runMode:beforeDate:] + 212
6   com.github.Electron.framework 	0x000000010d0243c1 0x10ad6f000 + 36393921
7   com.github.Electron.framework 	0x000000010d023122 0x10ad6f000 + 36389154
8   com.github.Electron.framework 	0x000000010cfd5b87 0x10ad6f000 + 36072327
9   com.github.Electron.framework 	0x000000010cfad357 0x10ad6f000 + 35906391
10  com.github.Electron.framework 	0x000000010cfec4f4 0x10ad6f000 + 36164852
11  com.github.Electron.framework 	0x000000010d01e097 0x10ad6f000 + 36368535
12  libsystem_pthread.dylib       	0x00007fff2032b8fc _pthread_start + 224
13  libsystem_pthread.dylib       	0x00007fff20327443 thread_start + 15

Thread 22:: ThreadPoolForegroundWorker
0   libsystem_kernel.dylib        	0x00007fff202f62ba mach_msg_trap + 10
1   libsystem_kernel.dylib        	0x00007fff202f662c mach_msg + 60
2   com.github.Electron.framework 	0x000000010d028c96 0x10ad6f000 + 36412566
3   com.github.Electron.framework 	0x000000010cfe68e8 0x10ad6f000 + 36141288
4   com.github.Electron.framework 	0x000000010cfe716a 0x10ad6f000 + 36143466
5   com.github.Electron.framework 	0x000000010cfe6e54 0x10ad6f000 + 36142676
6   com.github.Electron.framework 	0x000000010d01e097 0x10ad6f000 + 36368535
7   libsystem_pthread.dylib       	0x00007fff2032b8fc _pthread_start + 224
8   libsystem_pthread.dylib       	0x00007fff20327443 thread_start + 15

Thread 23:: ThreadPoolForegroundWorker
0   libsystem_kernel.dylib        	0x00007fff202f62ba mach_msg_trap + 10
1   libsystem_kernel.dylib        	0x00007fff202f662c mach_msg + 60
2   com.github.Electron.framework 	0x000000010d028c96 0x10ad6f000 + 36412566
3   com.github.Electron.framework 	0x000000010cfe68e8 0x10ad6f000 + 36141288
4   com.github.Electron.framework 	0x000000010cfe716a 0x10ad6f000 + 36143466
5   com.github.Electron.framework 	0x000000010cfe6e54 0x10ad6f000 + 36142676
6   com.github.Electron.framework 	0x000000010d01e097 0x10ad6f000 + 36368535
7   libsystem_pthread.dylib       	0x00007fff2032b8fc _pthread_start + 224
8   libsystem_pthread.dylib       	0x00007fff20327443 thread_start + 15

Thread 24:: CompositorTileWorker1
0   libsystem_kernel.dylib        	0x00007fff202f8cde __psynch_cvwait + 10
1   libsystem_pthread.dylib       	0x00007fff2032be49 _pthread_cond_wait + 1298
2   com.github.Electron.framework 	0x000000010d01d2c5 0x10ad6f000 + 36364997
3   com.github.Electron.framework 	0x000000010df29afd 0x10ad6f000 + 52144893
4   com.github.Electron.framework 	0x000000010d01e097 0x10ad6f000 + 36368535
5   libsystem_pthread.dylib       	0x00007fff2032b8fc _pthread_start + 224
6   libsystem_pthread.dylib       	0x00007fff20327443 thread_start + 15

Thread 25:: ThreadPoolForegroundWorker
0   libsystem_kernel.dylib        	0x00007fff202f62ba mach_msg_trap + 10
1   libsystem_kernel.dylib        	0x00007fff202f662c mach_msg + 60
2   com.github.Electron.framework 	0x000000010d028c96 0x10ad6f000 + 36412566
3   com.github.Electron.framework 	0x000000010cfe68e8 0x10ad6f000 + 36141288
4   com.github.Electron.framework 	0x000000010cfe716a 0x10ad6f000 + 36143466
5   com.github.Electron.framework 	0x000000010cfe6e54 0x10ad6f000 + 36142676
6   com.github.Electron.framework 	0x000000010d01e097 0x10ad6f000 + 36368535
7   libsystem_pthread.dylib       	0x00007fff2032b8fc _pthread_start + 224
8   libsystem_pthread.dylib       	0x00007fff20327443 thread_start + 15

Thread 26:: ThreadPoolSingleThreadForegroundBlocking0
0   libsystem_kernel.dylib        	0x00007fff202f62ba mach_msg_trap + 10
1   libsystem_kernel.dylib        	0x00007fff202f662c mach_msg + 60
2   com.github.Electron.framework 	0x000000010d028c96 0x10ad6f000 + 36412566
3   com.github.Electron.framework 	0x000000010d028aaf 0x10ad6f000 + 36412079
4   com.github.Electron.framework 	0x000000010cfe68da 0x10ad6f000 + 36141274
5   com.github.Electron.framework 	0x000000010cfe716a 0x10ad6f000 + 36143466
6   com.github.Electron.framework 	0x000000010cfe6eb4 0x10ad6f000 + 36142772
7   com.github.Electron.framework 	0x000000010d01e097 0x10ad6f000 + 36368535
8   libsystem_pthread.dylib       	0x00007fff2032b8fc _pthread_start + 224
9   libsystem_pthread.dylib       	0x00007fff20327443 thread_start + 15

Thread 27:
0   libsystem_kernel.dylib        	0x00007fff202f62f6 semaphore_wait_trap + 10
1   com.github.Electron.framework 	0x00000001106fdf10 uv_sem_wait + 16
2   com.github.Electron.framework 	0x000000010aed46d8 0x10ad6f000 + 1464024
3   libsystem_pthread.dylib       	0x00007fff2032b8fc _pthread_start + 224
4   libsystem_pthread.dylib       	0x00007fff20327443 thread_start + 15

Thread 28:: CacheThread_BlockFile
0   libsystem_kernel.dylib        	0x00007fff202ff1d2 kevent64 + 10
1   com.github.Electron.framework 	0x000000010d0336e1 0x10ad6f000 + 36456161
2   com.github.Electron.framework 	0x000000010d033576 0x10ad6f000 + 36455798
3   com.github.Electron.framework 	0x000000010cfd5b87 0x10ad6f000 + 36072327
4   com.github.Electron.framework 	0x000000010cfad357 0x10ad6f000 + 35906391
5   com.github.Electron.framework 	0x000000010cfec4f4 0x10ad6f000 + 36164852
6   com.github.Electron.framework 	0x000000010d01e097 0x10ad6f000 + 36368535
7   libsystem_pthread.dylib       	0x00007fff2032b8fc _pthread_start + 224
8   libsystem_pthread.dylib       	0x00007fff20327443 thread_start + 15

Thread 29:: com.apple.NSEventThread
0   libsystem_kernel.dylib        	0x00007fff202f62ba mach_msg_trap + 10
1   libsystem_kernel.dylib        	0x00007fff202f662c mach_msg + 60
2   com.apple.CoreFoundation      	0x00007fff2042349f __CFRunLoopServiceMachPort + 316
3   com.apple.CoreFoundation      	0x00007fff20421b7f __CFRunLoopRun + 1328
4   com.apple.CoreFoundation      	0x00007fff20420f8c CFRunLoopRunSpecific + 563
5   com.apple.AppKit              	0x00007fff22db023a _NSEventThread + 124
6   libsystem_pthread.dylib       	0x00007fff2032b8fc _pthread_start + 224
7   libsystem_pthread.dylib       	0x00007fff20327443 thread_start + 15

Thread 30:: ThreadPoolBackgroundWorker
0   libsystem_kernel.dylib        	0x00007fff202f62ba mach_msg_trap + 10
1   libsystem_kernel.dylib        	0x00007fff202f662c mach_msg + 60
2   com.github.Electron.framework 	0x000000010d028c96 0x10ad6f000 + 36412566
3   com.github.Electron.framework 	0x000000010cfe68e8 0x10ad6f000 + 36141288
4   com.github.Electron.framework 	0x000000010cfe6f3e 0x10ad6f000 + 36142910
5   com.github.Electron.framework 	0x000000010cfe6dc4 0x10ad6f000 + 36142532
6   com.github.Electron.framework 	0x000000010d01e097 0x10ad6f000 + 36368535
7   libsystem_pthread.dylib       	0x00007fff2032b8fc _pthread_start + 224
8   libsystem_pthread.dylib       	0x00007fff20327443 thread_start + 15

Thread 0 crashed with X86 Thread State (64-bit):
  rax: 0x0000000000000000  rbx: 0x00007fa3ccc897d0  rcx: 0x00000001107a4252  rdx: 0x00007fa3ccc897d0
  rdi: 0x00000000000005aa  rsi: 0x00000000000005aa  rbp: 0x00007ffee4ec2160  rsp: 0x00007ffee4ec2150
   r8: 0x00007fa3ccc897c8   r9: 0x0000000000000f90  r10: 0x00007fa3ccc54e20  r11: 0x00007fa3cce2c070
  r12: 0x0000000000000001  r13: 0x00007fa3ccc54dc8  r14: 0x00000000000092f8  r15: 0x00007ffee4ec21f0
  rip: 0x000000010cfc1d12  rfl: 0x0000000000010246  cr2: 0x00000000000005ca
  
Logical CPU:     2
Error Code:      0x00000004 (no mapping for user data read)
Trap Number:     14

Thread 0 instruction stream:
  48 8b 36 e8 e6 ff ff ff-48 8b 73 08 4c 89 f7 e8  H.6.....H.s.L...
  da ff ff ff 48 8b 7b 28-48 c7 43 28 00 00 00 00  ....H.{(H.C(....
  48 85 ff 74 06 48 8b 07-ff 50 08 48 89 df 5b 41  H..t.H...P.H..[A
  5e 5d e9 97 af f9 ff c3-66 0f 1f 44 00 00 55 48  ^]......f..D..UH
  89 e5 53 50 49 89 f8 48-8b 7f 08 48 85 ff 74 2f  ..SPI..H...H..t/
  49 8d 50 08 48 8b 0e 48-89 d3 48 89 fe 90 31 c0  I.P.H..H..H...1.
 [48]39 4e 20 0f 92 c0 48-0f 43 de 48 8b 34 c6 48  H9N ...H.C.H.4.H	<==
  85 f6 75 ea 48 39 d3 74-06 48 3b 4b 20 73 04 31  ..u.H9.t.H;K s.1
  c0 eb 73 48 8b 53 08 48-85 d2 74 0f 66 90 48 89  ..sH.S.H..t.f.H.
  d1 48 8b 12 48 85 d2 75-f5 eb 23 48 8b 4b 10 48  .H..H..u..#H.K.H
  39 19 74 1a 48 8d 53 10-66 0f 1f 44 00 00 48 8b  9.t.H.S.f..D..H.
  02 48 8b 48 10 48 8d 50-10 48 39 01 75 f0 49 39  .H.H.H.P.H9.u.I9
  
Thread 0 last branch register state not available.


Binary Images:
       0x10ad3d000 -        0x10ad65fff +com.electron.amazonconnections (1.0.5 - 1.0.5) <596191EB-2C06-339C-917C-D986342C029E> /usr/local/amazon/var/acme/session_agents/connections_disco_agent/webapp/AmazonConnections.app/Contents/MacOS/AmazonConnections
       0x10ad6f000 -        0x1114d7fff +com.github.Electron.framework (8.5.2) <CCEFA653-16AD-367B-94FA-38DE13F732CD> /usr/local/amazon/var/acme/session_agents/connections_disco_agent/webapp/AmazonConnections.app/Contents/Frameworks/Electron Framework.framework/Versions/A/Electron Framework
       0x111c63000 -        0x111c7efff +com.github.Squirrel (1.0 - 1) <E4398068-33D3-3A00-9DBE-5ACC9B022501> /usr/local/amazon/var/acme/session_agents/connections_disco_agent/webapp/AmazonConnections.app/Contents/Frameworks/Squirrel.framework/Versions/A/Squirrel
       0x111ca1000 -        0x111d04fff +org.reactivecocoa.ReactiveCocoa (1.0 - 1) <701B20DE-3ADD-3643-B52A-E05744C30DB3> /usr/local/amazon/var/acme/session_agents/connections_disco_agent/webapp/AmazonConnections.app/Contents/Frameworks/ReactiveCocoa.framework/Versions/A/ReactiveCocoa
       0x111d79000 -        0x111d8dfff +org.mantle.Mantle (1.0 - ???) <31915DD6-48E6-3706-A076-C9D4CE17F4F6> /usr/local/amazon/var/acme/session_agents/connections_disco_agent/webapp/AmazonConnections.app/Contents/Frameworks/Mantle.framework/Versions/A/Mantle
       0x111da3000 -        0x11203cfff +libffmpeg.dylib (0) <BDF5F45C-91E0-32D4-8E2F-02D2DBC1A860> /usr/local/amazon/var/acme/session_agents/connections_disco_agent/webapp/AmazonConnections.app/Contents/Frameworks/Electron Framework.framework/Versions/A/Libraries/libffmpeg.dylib
       0x112694000 -        0x1126a3fff  libobjc-trampolines.dylib (824) <C1B6BD90-D6AA-388B-B692-D66D512630AA> /usr/lib/libobjc-trampolines.dylib
       0x119576000 -        0x119611fff  dyld (852.2) <0CC19410-FD43-39AE-A32A-50273F8303A4> /usr/lib/dyld
    0x7fff20063000 -     0x7fff20064fff  libsystem_blocks.dylib (79) <925E3B6D-184D-3E73-97B1-643C4ADB387A> /usr/lib/system/libsystem_blocks.dylib
    0x7fff20065000 -     0x7fff2009afff  libxpc.dylib (2038.120.1) <FFFB49D7-2CA6-3E1F-AE4E-5697B19B7D76> /usr/lib/system/libxpc.dylib
    0x7fff2009b000 -     0x7fff200b2fff  libsystem_trace.dylib (1277.120.1) <7E800ECA-DFDB-3737-A3C5-FFDE37E65383> /usr/lib/system/libsystem_trace.dylib
    0x7fff200b3000 -     0x7fff20150fff  libcorecrypto.dylib (1000.140.4) <D211160D-E22F-3440-8054-1F5824519C7F> /usr/lib/system/libcorecrypto.dylib
    0x7fff20151000 -     0x7fff2017dfff  libsystem_malloc.dylib (317.140.5) <050E37E1-1458-3F80-BFA3-F1488570169D> /usr/lib/system/libsystem_malloc.dylib
    0x7fff2017e000 -     0x7fff201c2fff  libdispatch.dylib (1271.120.2) <8144B0BD-90D2-3EAE-999F-AB0D14082088> /usr/lib/system/libdispatch.dylib
    0x7fff201c3000 -     0x7fff201fcfff  libobjc.A.dylib (824) <8C7C49A1-4211-3E4C-BA3D-160D675EEE96> /usr/lib/libobjc.A.dylib
    0x7fff201fd000 -     0x7fff201fffff  libsystem_featureflags.dylib (28.60.1) <E5C43AE3-19E7-3DAB-8B5D-D79A4B68B5C0> /usr/lib/system/libsystem_featureflags.dylib
    0x7fff20200000 -     0x7fff20288fff  libsystem_c.dylib (1439.141.1) <3C273899-4CBE-32D5-BB31-7A449743204F> /usr/lib/system/libsystem_c.dylib
    0x7fff20289000 -     0x7fff202defff  libc++.1.dylib (905.6) <FD6DB1CB-B14B-3404-8BEB-B459C2F6C303> /usr/lib/libc++.1.dylib
    0x7fff202df000 -     0x7fff202f4fff  libc++abi.dylib (905.6) <D0CDDF98-1C04-300F-B685-4A4C59C04C42> /usr/lib/libc++abi.dylib
    0x7fff202f5000 -     0x7fff20324fff  libsystem_kernel.dylib (7195.141.6) <78289AAE-61B5-339F-A485-8819BC2388F2> /usr/lib/system/libsystem_kernel.dylib
    0x7fff20325000 -     0x7fff20330fff  libsystem_pthread.dylib (454.120.2) <1268FF2D-A513-3B51-BA65-AF2FF5789DDB> /usr/lib/system/libsystem_pthread.dylib
    0x7fff20331000 -     0x7fff2036cfff  libdyld.dylib (852.2) <3DE0178A-0AEE-3D08-AE19-6C6403F69BA1> /usr/lib/system/libdyld.dylib
    0x7fff2036d000 -     0x7fff20376fff  libsystem_platform.dylib (254.80.2) <EF52D569-09F5-32E1-B1B3-34E2CA55A017> /usr/lib/system/libsystem_platform.dylib
    0x7fff20377000 -     0x7fff203a2fff  libsystem_info.dylib (542.40.3) <55B39B7F-957B-3D99-A8DF-7CA80D38155D> /usr/lib/system/libsystem_info.dylib
    0x7fff203a3000 -     0x7fff20840fff  com.apple.CoreFoundation (6.9 - 1778.101) <8CF9D741-ADFF-3D5E-ACDE-DC342701EE0D> /System/Library/Frameworks/CoreFoundation.framework/Versions/A/CoreFoundation
    0x7fff20841000 -     0x7fff20a76fff  com.apple.LaunchServices (1122.44 - 1122.44) <C285E620-3D2F-3AD0-8A3D-BB1FC540FE44> /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/LaunchServices.framework/Versions/A/LaunchServices
    0x7fff20a77000 -     0x7fff20b4bfff  com.apple.gpusw.MetalTools (1.0 - 1) <C41024C5-01E7-3A66-A1F8-D7BC767260D8> /System/Library/PrivateFrameworks/MetalTools.framework/Versions/A/MetalTools
    0x7fff20b4c000 -     0x7fff20da8fff  libBLAS.dylib (1336.140.1) <170AFA22-1234-3DE9-9D94-52B3BE18E34E> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libBLAS.dylib
    0x7fff20da9000 -     0x7fff20df6fff  com.apple.Lexicon-framework (1.0 - 86.2) <B7047A55-806D-3B32-A2D6-885D824E54A6> /System/Library/PrivateFrameworks/Lexicon.framework/Versions/A/Lexicon
    0x7fff20df7000 -     0x7fff20e65fff  libSparse.dylib (106) <1E68BF64-7432-3509-BC85-5DE95379E901> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libSparse.dylib
    0x7fff20e66000 -     0x7fff20ee3fff  com.apple.SystemConfiguration (1.20 - 1.20) <8FEB39D4-ACD6-39F2-8D1B-A57CACD5628F> /System/Library/Frameworks/SystemConfiguration.framework/Versions/A/SystemConfiguration
    0x7fff20ee4000 -     0x7fff20f18fff  libCRFSuite.dylib (50) <BCDD0ED1-D2F4-3556-B218-4420C7EA47D2> /usr/lib/libCRFSuite.dylib
    0x7fff20f19000 -     0x7fff21151fff  libmecabra.dylib (929.10) <D780814D-2BB2-3D84-820E-12E4C23C590E> /usr/lib/libmecabra.dylib
    0x7fff21152000 -     0x7fff214b0fff  com.apple.Foundation (6.9 - 1778.101) <7B7FB88B-01D3-38CE-8029-837DB094C545> /System/Library/Frameworks/Foundation.framework/Versions/C/Foundation
    0x7fff214b1000 -     0x7fff21599fff  com.apple.LanguageModeling (1.0 - 247.3) <DBFAE8CF-36B2-30D8-9E82-6C412CD935B4> /System/Library/PrivateFrameworks/LanguageModeling.framework/Versions/A/LanguageModeling
    0x7fff2159a000 -     0x7fff216d0fff  com.apple.CoreDisplay (237.4 - 237.4) <556BADE0-D3B0-309C-9740-7FEFBD052B6B> /System/Library/Frameworks/CoreDisplay.framework/Versions/A/CoreDisplay
    0x7fff216d1000 -     0x7fff21941fff  com.apple.audio.AudioToolboxCore (1.0 - 1181.72) <5C3B84EE-B281-34C4-832F-78F00CC63B93> /System/Library/PrivateFrameworks/AudioToolboxCore.framework/Versions/A/AudioToolboxCore
    0x7fff21942000 -     0x7fff21b27fff  com.apple.CoreText (677.6.0.2 - 677.6.0.2) <10E1382E-7949-3F4E-8B15-A4BD31A75E91> /System/Library/Frameworks/CoreText.framework/Versions/A/CoreText
    0x7fff21b28000 -     0x7fff221b9fff  com.apple.audio.CoreAudio (5.0 - 5.0) <5EEA9225-4837-37F3-9105-941A5743169F> /System/Library/Frameworks/CoreAudio.framework/Versions/A/CoreAudio
    0x7fff221ba000 -     0x7fff22511fff  com.apple.security (7.0 - 59754.140.13) <A196C85A-DB28-3F5B-A415-5BE44AD81668> /System/Library/Frameworks/Security.framework/Versions/A/Security
    0x7fff22512000 -     0x7fff22771fff  libicucore.A.dylib (66112) <AC994BC1-F9CC-359C-A7B5-F2821EAEF650> /usr/lib/libicucore.A.dylib
    0x7fff22772000 -     0x7fff2277bfff  libsystem_darwin.dylib (1439.141.1) <2C81A009-45BB-30D7-A4F7-4B2EEC691617> /usr/lib/system/libsystem_darwin.dylib
    0x7fff2277c000 -     0x7fff22a67fff  com.apple.CoreServices.CarbonCore (1307.3 - 1307.3) <2C65E0D8-A9C7-31D8-A3D3-3AC1A91C80A5> /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/CarbonCore.framework/Versions/A/CarbonCore
    0x7fff22a68000 -     0x7fff22aa6fff  com.apple.CoreServicesInternal (476.1.1 - 476.1.1) <3FC6073F-78E4-3D3B-8765-50E50512C5EB> /System/Library/PrivateFrameworks/CoreServicesInternal.framework/Versions/A/CoreServicesInternal
    0x7fff22aa7000 -     0x7fff22ae1fff  com.apple.CSStore (1122.44 - 1122.44) <C103DAAA-A966-359B-97F0-BA3BB56ECBF1> /System/Library/PrivateFrameworks/CoreServicesStore.framework/Versions/A/CoreServicesStore
    0x7fff22ae2000 -     0x7fff22b90fff  com.apple.framework.IOKit (2.0.2 - 1845.120.6) <720D9AE1-79D6-3E77-8D7A-47F8F6681050> /System/Library/Frameworks/IOKit.framework/Versions/A/IOKit
    0x7fff22b91000 -     0x7fff22b9cfff  libsystem_notify.dylib (279.40.4) <2E40EA4A-B124-3010-8379-1B4D7082A08F> /usr/lib/system/libsystem_notify.dylib
    0x7fff22b9d000 -     0x7fff22beafff  libsandbox.1.dylib (1441.141.4) <C291C059-F7E4-3C20-BCBF-60F7011F0718> /usr/lib/libsandbox.1.dylib
    0x7fff22beb000 -     0x7fff23936fff  com.apple.AppKit (6.9 - 2022.60.128) <02EC69A0-D634-341B-BE3D-840F496F5814> /System/Library/Frameworks/AppKit.framework/Versions/C/AppKit
    0x7fff23937000 -     0x7fff23b85fff  com.apple.UIFoundation (1.0 - 728.9) <C2E04F0F-AEAA-3B77-9BBA-1CF628341A56> /System/Library/PrivateFrameworks/UIFoundation.framework/Versions/A/UIFoundation
    0x7fff23b86000 -     0x7fff23b98fff  com.apple.UniformTypeIdentifiers (637 - 637) <8FFD3B69-0840-34D6-83AD-7D521B1A2339> /System/Library/Frameworks/UniformTypeIdentifiers.framework/Versions/A/UniformTypeIdentifiers
    0x7fff23b99000 -     0x7fff23d23fff  com.apple.desktopservices (1.21 - 1346.6.1) <F2C97567-5B56-3840-A384-2131E362083B> /System/Library/PrivateFrameworks/DesktopServicesPriv.framework/Versions/A/DesktopServicesPriv
    0x7fff23d37000 -     0x7fff23f45fff  com.apple.CoreDuet (1.0 - 1) <BC29FC19-7BE1-3CC9-9668-39209F43C7F1> /System/Library/PrivateFrameworks/CoreDuet.framework/Versions/A/CoreDuet
    0x7fff24003000 -     0x7fff24689fff  libnetwork.dylib (2288.140.7) <42825FCA-35A1-352F-AE68-19D8F695604B> /usr/lib/libnetwork.dylib
    0x7fff2468a000 -     0x7fff24b28fff  com.apple.CFNetwork (1240.0.4 - 1240.0.4) <E4BF9BFF-798B-33FF-B37D-6D8175CA708A> /System/Library/Frameworks/CFNetwork.framework/Versions/A/CFNetwork
    0x7fff24b29000 -     0x7fff24b37fff  libsystem_networkextension.dylib (1295.140.3) <83AA4425-2F1D-36EC-B77B-8D4F03CDDB68> /usr/lib/system/libsystem_networkextension.dylib
    0x7fff24b38000 -     0x7fff24b38fff  libenergytrace.dylib (22.100.1) <9E877E0A-5261-3F75-91A0-521423499AD0> /usr/lib/libenergytrace.dylib
    0x7fff24b39000 -     0x7fff24b95fff  libMobileGestalt.dylib (978.140.1) <D1FF79C3-4B2F-32FB-BF25-9F0B9E160692> /usr/lib/libMobileGestalt.dylib
    0x7fff24b96000 -     0x7fff24bacfff  libsystem_asl.dylib (385) <8D324D65-EE16-3A1A-BD39-ACB1B3050D1F> /usr/lib/system/libsystem_asl.dylib
    0x7fff24bad000 -     0x7fff24bc5fff  com.apple.TCC (1.0 - 1) <18F48712-FFF0-3B30-B2C4-8A93AEF86A34> /System/Library/PrivateFrameworks/TCC.framework/Versions/A/TCC
    0x7fff24bc6000 -     0x7fff24f2bfff  com.apple.SkyLight (1.600.0 - 588.7) <5F88F814-A3DF-3446-8B35-F0CDD8C1B302> /System/Library/PrivateFrameworks/SkyLight.framework/Versions/A/SkyLight
    0x7fff24f2c000 -     0x7fff255b5fff  com.apple.CoreGraphics (2.0 - 1463.17.3) <5EDF86BC-FFDE-3906-9674-142C113B34EF> /System/Library/Frameworks/CoreGraphics.framework/Versions/A/CoreGraphics
    0x7fff255b6000 -     0x7fff256acfff  com.apple.ColorSync (4.13.0 - 3473.4.3) <102C423C-E05F-317B-83AE-A2A6B77D653B> /System/Library/Frameworks/ColorSync.framework/Versions/A/ColorSync
    0x7fff256ad000 -     0x7fff25708fff  com.apple.HIServices (1.22 - 716) <B2D34F3F-0CEB-35F1-9B32-E0806CF3FC91> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/HIServices.framework/Versions/A/HIServices
    0x7fff257fc000 -     0x7fff259bcfff  com.apple.Montreal (1.0 - 142) <04ABAAAD-2C28-3AA5-90C9-BD4B7869042F> /System/Library/PrivateFrameworks/Montreal.framework/Versions/A/Montreal
    0x7fff25aaf000 -     0x7fff25ecefff  com.apple.CoreData (120 - 1048) <33DE1B26-D4C6-3939-B12E-88897660BB38> /System/Library/Frameworks/CoreData.framework/Versions/A/CoreData
    0x7fff25ecf000 -     0x7fff25ee4fff  com.apple.ProtocolBuffer (1 - 285.24.10.20.1) <AEDEFF64-CA8A-365C-900F-3107383F91D9> /System/Library/PrivateFrameworks/ProtocolBuffer.framework/Versions/A/ProtocolBuffer
    0x7fff25ee5000 -     0x7fff26098fff  libsqlite3.dylib (321.3) <E7377C46-DA4F-3486-B935-0A35C3637215> /usr/lib/libsqlite3.dylib
    0x7fff26099000 -     0x7fff26115fff  com.apple.Accounts (113 - 113) <2AD45648-B327-313A-ACF2-846FB345A96E> /System/Library/Frameworks/Accounts.framework/Versions/A/Accounts
    0x7fff26116000 -     0x7fff2612dfff  com.apple.commonutilities (8.0 - 900) <98B456F4-8F4F-387B-B3BB-D3919295AE1D> /System/Library/PrivateFrameworks/CommonUtilities.framework/Versions/A/CommonUtilities
    0x7fff2612e000 -     0x7fff261adfff  com.apple.BaseBoard (526 - 526) <F9D85C3A-D0D6-351B-A6EE-5416CB90179D> /System/Library/PrivateFrameworks/BaseBoard.framework/Versions/A/BaseBoard
    0x7fff261ae000 -     0x7fff261f6fff  com.apple.RunningBoardServices (1.0 - 505.100.9) <2ED406CD-2253-33F0-B16A-694DB447CADC> /System/Library/PrivateFrameworks/RunningBoardServices.framework/Versions/A/RunningBoardServices
    0x7fff261f7000 -     0x7fff2626bfff  com.apple.AE (918.6 - 918.6) <C5130BB4-18E7-3804-A9D9-915D318426A5> /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/AE.framework/Versions/A/AE
    0x7fff2626c000 -     0x7fff26272fff  libdns_services.dylib (1310.140.1) <22BE5030-2F48-3ED6-9DF8-9D102CEF33FF> /usr/lib/libdns_services.dylib
    0x7fff26273000 -     0x7fff2627afff  libsystem_symptoms.dylib (1431.140.1) <1B4D8837-C951-3B69-B079-85D477749E8B> /usr/lib/system/libsystem_symptoms.dylib
    0x7fff2627b000 -     0x7fff26406fff  com.apple.Network (1.0 - 1) <2155E1AA-2067-36CF-979E-2F96062D5CFE> /System/Library/Frameworks/Network.framework/Versions/A/Network
    0x7fff26407000 -     0x7fff26436fff  com.apple.analyticsd (1.0 - 1) <0DF60ECD-742C-39D1-964A-48EC3DEA6319> /System/Library/PrivateFrameworks/CoreAnalytics.framework/Versions/A/CoreAnalytics
    0x7fff26437000 -     0x7fff26439fff  libDiagnosticMessagesClient.dylib (112) <A7EC7265-E13C-3C98-81EE-3EFB5CC65AB0> /usr/lib/libDiagnosticMessagesClient.dylib
    0x7fff2643a000 -     0x7fff26486fff  com.apple.spotlight.metadata.utilities (1.0 - 2150.26) <F709AE5E-AF80-3C9B-A3D3-B779164FBA95> /System/Library/PrivateFrameworks/MetadataUtilities.framework/Versions/A/MetadataUtilities
    0x7fff26487000 -     0x7fff26521fff  com.apple.Metadata (10.7.0 - 2150.26) <D7CE41CA-DDE7-32BE-926C-0DC3048C5E11> /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/Metadata.framework/Versions/A/Metadata
    0x7fff26522000 -     0x7fff26528fff  com.apple.DiskArbitration (2.7 - 2.7) <8DF059B4-BE32-3171-8CC4-C5FA189FA718> /System/Library/Frameworks/DiskArbitration.framework/Versions/A/DiskArbitration
    0x7fff26529000 -     0x7fff26b90fff  com.apple.vImage (8.1 - 544.4) <E62F9E4F-9A1D-3004-B7F4-6F83F71144C2> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vImage.framework/Versions/A/vImage
    0x7fff26b91000 -     0x7fff26e6efff  com.apple.QuartzCore (1.11 - 927.24) <88794856-F1F1-3D23-BDDB-0AE28A1D6D6E> /System/Library/Frameworks/QuartzCore.framework/Versions/A/QuartzCore
    0x7fff26e6f000 -     0x7fff26eb0fff  libFontRegistry.dylib (309) <300F2208-7274-38F8-B88D-9237BA6B397E> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/ATS.framework/Versions/A/Resources/libFontRegistry.dylib
    0x7fff26eb1000 -     0x7fff26ff1fff  com.apple.coreui (2.1 - 692.1) <BC5D8EAA-7CE8-35F3-8EAD-075B18D9606C> /System/Library/PrivateFrameworks/CoreUI.framework/Versions/A/CoreUI
    0x7fff26ff2000 -     0x7fff270ddfff  com.apple.ViewBridge (553.1 - 553.1) <DF83EA6E-4DA9-3322-BE86-0B3207167451> /System/Library/PrivateFrameworks/ViewBridge.framework/Versions/A/ViewBridge
    0x7fff270de000 -     0x7fff270e9fff  com.apple.PerformanceAnalysis (1.278.3 - 278.3) <6AF20F05-FF15-3174-A504-1AC16BA14729> /System/Library/PrivateFrameworks/PerformanceAnalysis.framework/Versions/A/PerformanceAnalysis
    0x7fff270ea000 -     0x7fff270f9fff  com.apple.OpenDirectory (11.6 - 230.40.1) <84B2D11F-E6C4-3C29-9A9A-939DB906E2F5> /System/Library/Frameworks/OpenDirectory.framework/Versions/A/OpenDirectory
    0x7fff270fa000 -     0x7fff27119fff  com.apple.CFOpenDirectory (11.6 - 230.40.1) <6BE3204F-2F86-34A7-AD79-4C88320F446F> /System/Library/Frameworks/OpenDirectory.framework/Versions/A/Frameworks/CFOpenDirectory.framework/Versions/A/CFOpenDirectory
    0x7fff2711a000 -     0x7fff27126fff  com.apple.CoreServices.FSEvents (1290.120.5 - 1290.120.5) <DC473A17-310F-3C16-B545-F75CE3F6D39D> /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/FSEvents.framework/Versions/A/FSEvents
    0x7fff27127000 -     0x7fff2714bfff  com.apple.coreservices.SharedFileList (144 - 144) <A13B58B8-6D7A-3F1B-AFB5-E41E0A6B4B81> /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/SharedFileList.framework/Versions/A/SharedFileList
    0x7fff2714c000 -     0x7fff2714efff  libapp_launch_measurement.dylib (14.1) <511EC2A9-6059-3A7D-9D2A-741189922D02> /usr/lib/libapp_launch_measurement.dylib
    0x7fff2714f000 -     0x7fff27196fff  com.apple.CoreAutoLayout (1.0 - 21.10.1) <18113C8E-B54E-3DD3-A1AD-2A5FD949CE66> /System/Library/PrivateFrameworks/CoreAutoLayout.framework/Versions/A/CoreAutoLayout
    0x7fff27197000 -     0x7fff27279fff  libxml2.2.dylib (34.10) <DD2093F0-F9B7-3F30-B46D-B028CE15E2B1> /usr/lib/libxml2.2.dylib
    0x7fff2727a000 -     0x7fff272c7fff  com.apple.CoreVideo (1.8 - 414.7) <EE991A40-DE38-3B13-891E-A51987D5CD70> /System/Library/Frameworks/CoreVideo.framework/Versions/A/CoreVideo
    0x7fff272c8000 -     0x7fff272cafff  com.apple.loginsupport (1.0 - 1) <4C358D8E-4BB8-3DD8-8A72-11BD80607BDE> /System/Library/PrivateFrameworks/login.framework/Versions/A/Frameworks/loginsupport.framework/Versions/A/loginsupport
    0x7fff272cb000 -     0x7fff272f2fff  com.apple.aps.framework (4.0 - 4.0) <A76C4B82-24CD-3AF4-BADD-6135F6E7057A> /System/Library/PrivateFrameworks/ApplePushService.framework/Versions/A/ApplePushService
    0x7fff272f3000 -     0x7fff2730efff  com.apple.UserManagement (1.0 - 1) <FB298359-31F5-3DDD-B928-604C4B1ED1F3> /System/Library/PrivateFrameworks/UserManagement.framework/Versions/A/UserManagement
    0x7fff2730f000 -     0x7fff274a0fff  com.apple.cloudkit.CloudKit (990 - 990) <A4ADF4E3-AC2D-322B-B76C-BC249AB27395> /System/Library/Frameworks/CloudKit.framework/Versions/A/CloudKit
    0x7fff27523000 -     0x7fff278b2fff  com.apple.CoreML (1.0 - 1) <3845782D-F855-3DD4-ADD3-8CB08C2BCFE5> /System/Library/Frameworks/CoreML.framework/Versions/A/CoreML
    0x7fff28205000 -     0x7fff28281fff  com.apple.corelocation (2420.19.23 - 2420.19.23) <1BEB1A0D-4122-3F8C-AC1A-07A12C36C84F> /System/Library/Frameworks/CoreLocation.framework/Versions/A/CoreLocation
    0x7fff28282000 -     0x7fff28292fff  libsystem_containermanager.dylib (318.100.4) <1139CD47-9CBA-356F-8694-1D00EB9F0C8F> /usr/lib/system/libsystem_containermanager.dylib
    0x7fff28293000 -     0x7fff282a4fff  com.apple.IOSurface (290.8.1 - 290.8.1) <8B251196-DA38-38BF-8A91-45AC2B06014C> /System/Library/Frameworks/IOSurface.framework/Versions/A/IOSurface
    0x7fff282a5000 -     0x7fff282aefff  com.apple.IOAccelerator (442.9 - 442.9) <F2C3DC87-49D7-3A67-8E6D-12D75D98EFDD> /System/Library/PrivateFrameworks/IOAccelerator.framework/Versions/A/IOAccelerator
    0x7fff282af000 -     0x7fff283d2fff  com.apple.Metal (244.303 - 244.303) <71B6039E-232E-3AD2-881F-DF8E73C75B99> /System/Library/Frameworks/Metal.framework/Versions/A/Metal
    0x7fff283d3000 -     0x7fff283effff  com.apple.audio.caulk (1.0 - 70) <F6A09FF3-1DC7-302C-86E3-B2DD9B7130A9> /System/Library/PrivateFrameworks/caulk.framework/Versions/A/caulk
    0x7fff283f0000 -     0x7fff284dafff  com.apple.CoreMedia (1.0 - 2780.10) <6A003180-F8AA-3DFA-B095-61D8E859FE3F> /System/Library/Frameworks/CoreMedia.framework/Versions/A/CoreMedia
    0x7fff284db000 -     0x7fff28637fff  libFontParser.dylib (305.6.0.4) <C3E552F6-72AD-3F3A-B217-E44A5C565240> /System/Library/PrivateFrameworks/FontServices.framework/libFontParser.dylib
    0x7fff28638000 -     0x7fff28933fff  com.apple.HIToolbox (2.1.1 - 1062) <DEF01A0C-8B9D-359E-9FE7-B15D551888DC> /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/HIToolbox.framework/Versions/A/HIToolbox
    0x7fff28934000 -     0x7fff28947fff  com.apple.framework.DFRFoundation (1.0 - 267) <EBFDDB28-7661-3B50-BC15-736C5DF05AB3> /System/Library/PrivateFrameworks/DFRFoundation.framework/Versions/A/DFRFoundation
    0x7fff28948000 -     0x7fff2894bfff  com.apple.dt.XCTTargetBootstrap (1.0 - 18119.1) <DD9E09C3-B658-3BD2-8229-E3E3C5D85552> /System/Library/PrivateFrameworks/XCTTargetBootstrap.framework/Versions/A/XCTTargetBootstrap
    0x7fff2894c000 -     0x7fff28975fff  com.apple.CoreSVG (1.0 - 149) <C4DC952A-9373-33E5-8A98-F008986B0420> /System/Library/PrivateFrameworks/CoreSVG.framework/Versions/A/CoreSVG
    0x7fff28976000 -     0x7fff28bb2fff  com.apple.ImageIO (3.3.0 - 2130.7.3) <28C6A501-2548-3187-A13B-9F314280BBB8> /System/Library/Frameworks/ImageIO.framework/Versions/A/ImageIO
    0x7fff28bb3000 -     0x7fff28f2efff  com.apple.CoreImage (16.3.0 - 1140.2) <3ED3F244-632C-383D-89B0-50F2E0FDBA40> /System/Library/Frameworks/CoreImage.framework/Versions/A/CoreImage
    0x7fff28f2f000 -     0x7fff28f95fff  com.apple.MetalPerformanceShaders.MPSCore (1.0 - 1) <C12F8828-6D1E-3820-BBF7-80EEA978AE9C> /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSCore.framework/Versions/A/MPSCore
    0x7fff28f96000 -     0x7fff28f99fff  libsystem_configuration.dylib (1109.140.1) <02F3A5C9-6289-3012-8F5F-F1DB669ADB79> /usr/lib/system/libsystem_configuration.dylib
    0x7fff28f9a000 -     0x7fff28f9efff  libsystem_sandbox.dylib (1441.141.4) <5471601B-5072-3E97-8926-804FF08DC4C0> /usr/lib/system/libsystem_sandbox.dylib
    0x7fff28f9f000 -     0x7fff28fa0fff  com.apple.AggregateDictionary (1.0 - 1) <B25A1764-0BBC-388B-8FB4-A8FBB8F51C10> /System/Library/PrivateFrameworks/AggregateDictionary.framework/Versions/A/AggregateDictionary
    0x7fff28fa1000 -     0x7fff28fa4fff  com.apple.AppleSystemInfo (3.1.5 - 3.1.5) <4A803F86-CA61-3508-864A-302F032ADA70> /System/Library/PrivateFrameworks/AppleSystemInfo.framework/Versions/A/AppleSystemInfo
    0x7fff28fa5000 -     0x7fff28fa6fff  liblangid.dylib (136) <F4019132-A63D-3A38-A8DB-974C6F1311ED> /usr/lib/liblangid.dylib
    0x7fff28fa7000 -     0x7fff2904bfff  com.apple.CoreNLP (1.0 - 245.2) <203C6AB9-5B07-3370-A056-DA1F2C8A8419> /System/Library/PrivateFrameworks/CoreNLP.framework/Versions/A/CoreNLP
    0x7fff2904c000 -     0x7fff29052fff  com.apple.LinguisticData (1.0 - 399) <AB85B59F-3047-37EC-AB9E-835D87BACF73> /System/Library/PrivateFrameworks/LinguisticData.framework/Versions/A/LinguisticData
    0x7fff29053000 -     0x7fff296fbfff  libBNNS.dylib (288.100.5) <4BB7A1B7-D1F2-3DC3-BFC7-D57CBD892719> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libBNNS.dylib
    0x7fff296fc000 -     0x7fff298cefff  libvDSP.dylib (760.100.3) <DA809F3E-9391-3BE0-98C6-061CCACA809A> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libvDSP.dylib
    0x7fff298cf000 -     0x7fff298e0fff  com.apple.CoreEmoji (1.0 - 128.4) <8DB42230-A624-3C13-80F8-EC2CE89C0699> /System/Library/PrivateFrameworks/CoreEmoji.framework/Versions/A/CoreEmoji
    0x7fff298e1000 -     0x7fff298ebfff  com.apple.IOMobileFramebuffer (343.0.0 - 343.0.0) <195E20E7-33BD-3935-92ED-AA354180B7FA> /System/Library/PrivateFrameworks/IOMobileFramebuffer.framework/Versions/A/IOMobileFramebuffer
    0x7fff298ec000 -     0x7fff299befff  com.apple.framework.CoreWLAN (16.0 - 1657) <0A58C97E-2ACD-3223-8585-FDA5DA4C38C5> /System/Library/Frameworks/CoreWLAN.framework/Versions/A/CoreWLAN
    0x7fff299bf000 -     0x7fff29bc0fff  com.apple.CoreUtils (6.6 - 660.37) <0B1ED18A-B228-3840-A0F2-23AC2C37A6CA> /System/Library/PrivateFrameworks/CoreUtils.framework/Versions/A/CoreUtils
    0x7fff29bc1000 -     0x7fff29be3fff  com.apple.MobileKeyBag (2.0 - 1.0) <19D8140C-CC92-35E8-AF78-B335567A7C24> /System/Library/PrivateFrameworks/MobileKeyBag.framework/Versions/A/MobileKeyBag
    0x7fff29be4000 -     0x7fff29bf4fff  com.apple.AssertionServices (1.0 - 505.100.9) <850AE031-A3B3-30C0-81A1-71FBCE620BC1> /System/Library/PrivateFrameworks/AssertionServices.framework/Versions/A/AssertionServices
    0x7fff29bf5000 -     0x7fff29c80fff  com.apple.securityfoundation (6.0 - 55240.40.4) <A7D05091-B54C-317A-81FE-4B174C968C5A> /System/Library/Frameworks/SecurityFoundation.framework/Versions/A/SecurityFoundation
    0x7fff29c81000 -     0x7fff29c8afff  com.apple.coreservices.BackgroundTaskManagement (1.0 - 104) <98B365F9-8E0C-32C7-AC5A-FFB9A4A0B30A> /System/Library/PrivateFrameworks/BackgroundTaskManagement.framework/Versions/A/BackgroundTaskManagement
    0x7fff29c8b000 -     0x7fff29c8ffff  com.apple.xpc.ServiceManagement (1.0 - 1) <7D081389-0032-3521-A3D9-84B4667817FB> /System/Library/Frameworks/ServiceManagement.framework/Versions/A/ServiceManagement
    0x7fff29c90000 -     0x7fff29c92fff  libquarantine.dylib (119.40.2) <3244B57B-9FDF-373E-9F96-A7BAD7534F23> /usr/lib/system/libquarantine.dylib
    0x7fff29c93000 -     0x7fff29c9efff  libCheckFix.dylib (31) <AAB549BA-1738-33FD-BBC4-C34B5070C309> /usr/lib/libCheckFix.dylib
    0x7fff29c9f000 -     0x7fff29cb6fff  libcoretls.dylib (169.100.1) <FC2811AD-9D76-3403-B760-32A101D07638> /usr/lib/libcoretls.dylib
    0x7fff29cb7000 -     0x7fff29cc7fff  libbsm.0.dylib (68.40.1) <61577B7F-2C06-365C-9039-E00B0B5258D0> /usr/lib/libbsm.0.dylib
    0x7fff29cc8000 -     0x7fff29d11fff  libmecab.dylib (929.10) <D60C5095-3A5F-3284-9699-08C76DA29CBD> /usr/lib/libmecab.dylib
    0x7fff29d12000 -     0x7fff29d17fff  libgermantok.dylib (24) <6F2B01E8-6077-3B72-91F3-AB6D0FCB15D6> /usr/lib/libgermantok.dylib
    0x7fff29d18000 -     0x7fff29d2dfff  libLinearAlgebra.dylib (1336.140.1) <A450756D-D3AC-342D-A802-ED6C554A494A> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libLinearAlgebra.dylib
    0x7fff29d2e000 -     0x7fff29f4cfff  com.apple.MetalPerformanceShaders.MPSNeuralNetwork (1.0 - 1) <8AAFA6C5-1FBD-359A-8774-F1D1FBFCCFFE> /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNeuralNetwork.framework/Versions/A/MPSNeuralNetwork
    0x7fff29f4d000 -     0x7fff29f9cfff  com.apple.MetalPerformanceShaders.MPSRayIntersector (1.0 - 1) <0C854684-1D62-35D1-83C1-9066DB158189> /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSRayIntersector.framework/Versions/A/MPSRayIntersector
    0x7fff29f9d000 -     0x7fff2a0fefff  com.apple.MLCompute (1.0 - 1) <9255AB44-3AB5-3F3F-8FA2-77FEA1C7C221> /System/Library/Frameworks/MLCompute.framework/Versions/A/MLCompute
    0x7fff2a0ff000 -     0x7fff2a135fff  com.apple.MetalPerformanceShaders.MPSMatrix (1.0 - 1) <B7361691-334A-3A33-98E1-A9A623E5D26A> /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSMatrix.framework/Versions/A/MPSMatrix
    0x7fff2a136000 -     0x7fff2a18cfff  com.apple.MetalPerformanceShaders.MPSNDArray (1.0 - 1) <706E8171-48B3-33A3-B55B-35B5F86F3043> /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSNDArray.framework/Versions/A/MPSNDArray
    0x7fff2a18d000 -     0x7fff2a21dfff  com.apple.MetalPerformanceShaders.MPSImage (1.0 - 1) <3999E177-7A40-358A-BE89-1F20ADF13740> /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/Frameworks/MPSImage.framework/Versions/A/MPSImage
    0x7fff2a21e000 -     0x7fff2a22dfff  com.apple.AppleFSCompression (125 - 1.0) <F7163A3A-C4F0-3169-9501-B9AAB8CAE9CD> /System/Library/PrivateFrameworks/AppleFSCompression.framework/Versions/A/AppleFSCompression
    0x7fff2a22e000 -     0x7fff2a23afff  libbz2.1.0.dylib (44) <ECD22F5B-FD6C-39A5-884B-418C6B896263> /usr/lib/libbz2.1.0.dylib
    0x7fff2a23b000 -     0x7fff2a23ffff  libsystem_coreservices.dylib (127.1) <619CCB6D-226C-35BD-98FB-04A18FD54792> /usr/lib/system/libsystem_coreservices.dylib
    0x7fff2a240000 -     0x7fff2a26dfff  com.apple.CoreServices.OSServices (1122.44 - 1122.44) <C547575F-985F-31B8-A61C-79D3A673B8D9> /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/OSServices.framework/Versions/A/OSServices
    0x7fff2a26e000 -     0x7fff2a39dfff  com.apple.AuthKit (1.0 - 1) <C72D7981-A3B6-3883-A14F-43485DF54FC4> /System/Library/PrivateFrameworks/AuthKit.framework/Versions/A/AuthKit
    0x7fff2a39e000 -     0x7fff2a3ccfff  com.apple.UserNotifications (1.0 - 348.5) <36B03A58-F8A4-3671-9B0B-1B87FF9D3FA0> /System/Library/Frameworks/UserNotifications.framework/Versions/A/UserNotifications
    0x7fff2a43c000 -     0x7fff2a44efff  libz.1.dylib (76) <F805C1CB-1B80-33D0-994C-1D522D347A68> /usr/lib/libz.1.dylib
    0x7fff2a44f000 -     0x7fff2a496fff  libsystem_m.dylib (3186.100.3) <D61B56FE-649B-34A0-8446-25685B2BBBF2> /usr/lib/system/libsystem_m.dylib
    0x7fff2a497000 -     0x7fff2a497fff  libcharset.1.dylib (59) <363A6C40-7446-3A72-B5EA-4731843CFE2F> /usr/lib/libcharset.1.dylib
    0x7fff2a498000 -     0x7fff2a49dfff  libmacho.dylib (980) <A4F4D532-7824-3E4E-8FB6-45617415E7DD> /usr/lib/system/libmacho.dylib
    0x7fff2a49e000 -     0x7fff2a4b9fff  libkxld.dylib (7195.141.6) <1121F83B-5D42-368B-B440-100418CD4B23> /usr/lib/system/libkxld.dylib
    0x7fff2a4ba000 -     0x7fff2a4c5fff  libcommonCrypto.dylib (60178.120.3) <CF1E0E70-9F6C-3FAF-82B2-D55F7C9EBB03> /usr/lib/system/libcommonCrypto.dylib
    0x7fff2a4c6000 -     0x7fff2a4d0fff  libunwind.dylib (201) <4602E909-C71A-3006-8140-BE616DA241EE> /usr/lib/system/libunwind.dylib
    0x7fff2a4d1000 -     0x7fff2a4d8fff  liboah.dylib (203.58) <F72C2D50-7279-3497-8A59-56908F9661F3> /usr/lib/liboah.dylib
    0x7fff2a4d9000 -     0x7fff2a4e3fff  libcopyfile.dylib (173.40.2) <B0F35A80-D5E3-33DD-A47D-ACBFE1300523> /usr/lib/system/libcopyfile.dylib
    0x7fff2a4e4000 -     0x7fff2a4ebfff  libcompiler_rt.dylib (102.2) <1C049207-1719-39AC-A2A9-6E5BE28AA138> /usr/lib/system/libcompiler_rt.dylib
    0x7fff2a4ec000 -     0x7fff2a4eefff  libsystem_collections.dylib (1439.141.1) <F2D775D9-AAEF-371F-AA54-CFB882B9B430> /usr/lib/system/libsystem_collections.dylib
    0x7fff2a4ef000 -     0x7fff2a4f1fff  libsystem_secinit.dylib (87.60.1) <EB4516ED-1F8B-3E8A-8C4B-B209A33DCCEF> /usr/lib/system/libsystem_secinit.dylib
    0x7fff2a4f2000 -     0x7fff2a4f4fff  libremovefile.dylib (49.120.1) <1AEE3D84-32F9-35FB-8036-B178C9E27D20> /usr/lib/system/libremovefile.dylib
    0x7fff2a4f5000 -     0x7fff2a4f5fff  libkeymgr.dylib (31) <698AF6EE-08BB-36CF-B7AD-9EC16E36FA0B> /usr/lib/system/libkeymgr.dylib
    0x7fff2a4f6000 -     0x7fff2a4fdfff  libsystem_dnssd.dylib (1310.140.1) <0685BDB0-9A98-3ADD-B95A-11F221FD80D7> /usr/lib/system/libsystem_dnssd.dylib
    0x7fff2a4fe000 -     0x7fff2a503fff  libcache.dylib (83) <B51FAB34-AA9C-38C5-95F1-E5E54B21EA67> /usr/lib/system/libcache.dylib
    0x7fff2a504000 -     0x7fff2a505fff  libSystem.B.dylib (1292.120.1) <DBD0A184-CD98-3225-8E9B-D5BFE0D30562> /usr/lib/libSystem.B.dylib
    0x7fff2a506000 -     0x7fff2a509fff  libfakelink.dylib (3) <BE0E6C60-675A-3739-A47A-67C650B1F790> /usr/lib/libfakelink.dylib
    0x7fff2a50a000 -     0x7fff2a50afff  com.apple.SoftLinking (1.0 - 1) <9E4B6591-74E3-3B36-91C4-851FAA567DAA> /System/Library/PrivateFrameworks/SoftLinking.framework/Versions/A/SoftLinking
    0x7fff2a50b000 -     0x7fff2a542fff  libpcap.A.dylib (98.100.3) <6DD23455-C0CA-313E-89B5-A45F8CD71C20> /usr/lib/libpcap.A.dylib
    0x7fff2a543000 -     0x7fff2a633fff  libiconv.2.dylib (59) <90F749E2-9D2D-3323-A018-31A1F95221A1> /usr/lib/libiconv.2.dylib
    0x7fff2a634000 -     0x7fff2a645fff  libcmph.dylib (8) <17871D7D-49C2-3343-AC30-C40E3AD5B2B6> /usr/lib/libcmph.dylib
    0x7fff2a646000 -     0x7fff2a6b7fff  libarchive.2.dylib (83.100.2) <5AF9560E-5683-33A5-8D60-A469193B94E3> /usr/lib/libarchive.2.dylib
    0x7fff2a6b8000 -     0x7fff2a71ffff  com.apple.SearchKit (1.4.1 - 1.4.1) <A45AE5BD-9242-351E-B621-3EB50F66AB30> /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/SearchKit.framework/Versions/A/SearchKit
    0x7fff2a720000 -     0x7fff2a721fff  libThaiTokenizer.dylib (3) <7B40AC51-B945-3AF0-B349-5818050D37FB> /usr/lib/libThaiTokenizer.dylib
    0x7fff2a722000 -     0x7fff2a744fff  com.apple.applesauce (1.0 - 16.28) <7D011403-38CD-37DA-B2C2-00D2D2273422> /System/Library/PrivateFrameworks/AppleSauce.framework/Versions/A/AppleSauce
    0x7fff2a745000 -     0x7fff2a75cfff  libapple_nghttp2.dylib (1.41) <E3FCBDB9-6671-3368-B371-B9CAC9BB1B45> /usr/lib/libapple_nghttp2.dylib
    0x7fff2a75d000 -     0x7fff2a773fff  libSparseBLAS.dylib (1336.140.1) <78762464-084C-3743-BC56-A2AF5D010909> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libSparseBLAS.dylib
    0x7fff2a774000 -     0x7fff2a775fff  com.apple.MetalPerformanceShaders.MetalPerformanceShaders (1.0 - 1) <BD2B6B2B-E116-3B97-A25F-71B4AC7B2BA6> /System/Library/Frameworks/MetalPerformanceShaders.framework/Versions/A/MetalPerformanceShaders
    0x7fff2a776000 -     0x7fff2a77afff  libpam.2.dylib (28.40.1) <E73D1903-42B9-3FF9-AE5D-482672F015AC> /usr/lib/libpam.2.dylib
    0x7fff2a77b000 -     0x7fff2a79afff  libcompression.dylib (96.120.1) <CFE780B4-AFB0-327C-BB68-A5565AA7C630> /usr/lib/libcompression.dylib
    0x7fff2a79b000 -     0x7fff2a7a0fff  libQuadrature.dylib (7) <9668C241-61D5-3AE9-9856-708ACDC27F12> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libQuadrature.dylib
    0x7fff2a7a1000 -     0x7fff2ab3efff  libLAPACK.dylib (1336.140.1) <8B968A9A-8263-3639-A740-636387467C03> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libLAPACK.dylib
    0x7fff2ab3f000 -     0x7fff2ab8efff  com.apple.DictionaryServices (1.2 - 341) <617030DF-769F-3CE0-869F-7F5B9B5A3784> /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/DictionaryServices.framework/Versions/A/DictionaryServices
    0x7fff2ab8f000 -     0x7fff2aba7fff  liblzma.5.dylib (16) <6DE3F2AA-7140-3F6D-AD12-0DBA19BBBD54> /usr/lib/liblzma.5.dylib
    0x7fff2aba8000 -     0x7fff2aba9fff  libcoretls_cfhelpers.dylib (169.100.1) <0CF72D7A-0A39-3683-82ED-29A09761D6FF> /usr/lib/libcoretls_cfhelpers.dylib
    0x7fff2abaa000 -     0x7fff2aca5fff  com.apple.APFS (1677.141.2 - 1677.141.2) <F42A21D0-F8CE-3DDA-ACE6-C0AC9EE2FA6C> /System/Library/PrivateFrameworks/APFS.framework/Versions/A/APFS
    0x7fff2aca6000 -     0x7fff2acb3fff  libxar.1.dylib (452) <0B0B68CC-D627-3BDC-AE01-007C6AD8E97B> /usr/lib/libxar.1.dylib
    0x7fff2acb4000 -     0x7fff2acb7fff  libutil.dylib (58.40.2) <0EA3237C-B6E6-351B-AE27-8975D88602D6> /usr/lib/libutil.dylib
    0x7fff2acb8000 -     0x7fff2ace0fff  libxslt.1.dylib (17.6) <300C3D2D-19B1-3D8E-B212-1D2EB6C8B80A> /usr/lib/libxslt.1.dylib
    0x7fff2ace1000 -     0x7fff2acebfff  libChineseTokenizer.dylib (37.1) <B4314553-EF8B-3CD4-A7D8-76CD7FC7142D> /usr/lib/libChineseTokenizer.dylib
    0x7fff2acec000 -     0x7fff2ada9fff  libvMisc.dylib (760.100.3) <B8F30684-94D1-3A53-80BF-C78F424594AD> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libvMisc.dylib
    0x7fff2adaa000 -     0x7fff2ae41fff  libate.dylib (3.0.6) <FA881406-28F3-33BD-B75D-40389CE2ADD1> /usr/lib/libate.dylib
    0x7fff2ae42000 -     0x7fff2ae49fff  libIOReport.dylib (64.100.1) <4D638FAC-2FD8-359C-8159-1ED37CBB5704> /usr/lib/libIOReport.dylib
    0x7fff2ae4a000 -     0x7fff2ae5dfff  com.apple.CrashReporterSupport (10.13 - 15053.1) <B879B52A-5A65-3CB3-B271-15A032853A35> /System/Library/PrivateFrameworks/CrashReporterSupport.framework/Versions/A/CrashReporterSupport
    0x7fff2ae75000 -     0x7fff2aef2fff  com.apple.CVNLP (1.0 - 119) <3604CA5C-2547-3C9A-99F5-3A7AB0DBE0B1> /System/Library/PrivateFrameworks/CVNLP.framework/Versions/A/CVNLP
    0x7fff2af14000 -     0x7fff2af4afff  com.apple.pluginkit.framework (1.0 - 1) <84F2AE60-705A-3B37-B42E-13EF51B1FA1B> /System/Library/PrivateFrameworks/PlugInKit.framework/Versions/A/PlugInKit
    0x7fff2af4b000 -     0x7fff2af52fff  libMatch.1.dylib (38) <85F66EF8-FC5E-385C-AF8F-79532C2AC988> /usr/lib/libMatch.1.dylib
    0x7fff2af53000 -     0x7fff2afdefff  libCoreStorage.dylib (554.140.2) <249F3E03-6C96-3E20-999A-BBFE36AADECA> /usr/lib/libCoreStorage.dylib
    0x7fff2afdf000 -     0x7fff2b032fff  com.apple.AppleVAFramework (6.1.3 - 6.1.3) <2CDA1194-F435-3B9C-94A2-220E26E40DE6> /System/Library/PrivateFrameworks/AppleVA.framework/Versions/A/AppleVA
    0x7fff2b033000 -     0x7fff2b04cfff  libexpat.1.dylib (26.141.1) <84DC54E5-9E75-3F64-9D7F-3CA641674ED8> /usr/lib/libexpat.1.dylib
    0x7fff2b04d000 -     0x7fff2b056fff  libheimdal-asn1.dylib (597.140.2) <8D7B3A0D-A699-3947-9E8C-EEA4B4AD6408> /usr/lib/libheimdal-asn1.dylib
    0x7fff2b057000 -     0x7fff2b06bfff  com.apple.IconFoundation (479.4 - 479.4) <6ED33568-2A1D-3918-9D32-D1E102002E48> /System/Library/PrivateFrameworks/IconFoundation.framework/Versions/A/IconFoundation
    0x7fff2b06c000 -     0x7fff2b0d8fff  com.apple.IconServices (479.4 - 479.4) <D94D5AF3-6EF6-30D8-A7F8-58A1A3E5641B> /System/Library/PrivateFrameworks/IconServices.framework/Versions/A/IconServices
    0x7fff2b0d9000 -     0x7fff2b177fff  com.apple.MediaExperience (1.0 - 1) <245932F7-E76A-37A7-A033-7BB62F8ED190> /System/Library/PrivateFrameworks/MediaExperience.framework/Versions/A/MediaExperience
    0x7fff2b178000 -     0x7fff2b1a0fff  com.apple.persistentconnection (1.0 - 1.0) <90FBA2DD-E91A-3A9F-80C5-8F94950136A4> /System/Library/PrivateFrameworks/PersistentConnection.framework/Versions/A/PersistentConnection
    0x7fff2b1a1000 -     0x7fff2b1affff  com.apple.GraphVisualizer (1.0 - 100.1) <9538C368-5703-367B-ADAE-20EC5C3C5C41> /System/Library/PrivateFrameworks/GraphVisualizer.framework/Versions/A/GraphVisualizer
    0x7fff2b1b0000 -     0x7fff2b5cbfff  com.apple.vision.FaceCore (4.3.2 - 4.3.2) <86110F21-96FE-325C-8D55-9385690C2386> /System/Library/PrivateFrameworks/FaceCore.framework/Versions/A/FaceCore
    0x7fff2b5cc000 -     0x7fff2b613fff  com.apple.OTSVG (1.0 - 677.6.0.2) <34AD6D57-71B8-3859-94AF-DB856D8FD6BA> /System/Library/PrivateFrameworks/OTSVG.framework/Versions/A/OTSVG
    0x7fff2b614000 -     0x7fff2b61afff  com.apple.xpc.AppServerSupport (1.0 - 2038.120.1) <AD03039F-3D12-31FE-A497-EC4A87097683> /System/Library/PrivateFrameworks/AppServerSupport.framework/Versions/A/AppServerSupport
    0x7fff2b61b000 -     0x7fff2b62dfff  libhvf.dylib (1.0 - $[CURRENT_PROJECT_VERSION]) <B4F0CDA6-0332-3AB9-A0FB-8CD6EE316D30> /System/Library/PrivateFrameworks/FontServices.framework/libhvf.dylib
    0x7fff2b62e000 -     0x7fff2b630fff  libspindump.dylib (295.2) <8DE7E414-DCEC-30B8-87DC-511D362D49F3> /usr/lib/libspindump.dylib
    0x7fff2b631000 -     0x7fff2b6f1fff  com.apple.Heimdal (4.0 - 2.0) <30D71BC9-C18F-35C7-B7E1-88E645D4D329> /System/Library/PrivateFrameworks/Heimdal.framework/Versions/A/Heimdal
    0x7fff2b6f2000 -     0x7fff2b70cfff  com.apple.login (3.0 - 3.0) <0690C64C-DE8C-3AA2-A4A5-BE3EFC3BDC62> /System/Library/PrivateFrameworks/login.framework/Versions/A/login
    0x7fff2b70d000 -     0x7fff2b7e4fff  com.apple.corebrightness (1.0 - 1) <84C0971C-31BB-3E68-9EC1-0EF05986CEEA> /System/Library/PrivateFrameworks/CoreBrightness.framework/Versions/A/CoreBrightness
    0x7fff2b88d000 -     0x7fff2b890fff  libodfde.dylib (26) <6436E5A0-CEF3-302F-86E7-E28C3EBE7A3A> /usr/lib/libodfde.dylib
    0x7fff2b891000 -     0x7fff2b8cdfff  com.apple.bom (14.0 - 235) <E428566D-DFA2-33AC-AF3B-C68530D52522> /System/Library/PrivateFrameworks/Bom.framework/Versions/A/Bom
    0x7fff2b8ce000 -     0x7fff2b917fff  com.apple.AppleJPEG (1.0 - 1) <15DCB33B-EB52-38A2-B02F-EC235DC85B52> /System/Library/PrivateFrameworks/AppleJPEG.framework/Versions/A/AppleJPEG
    0x7fff2b918000 -     0x7fff2b9f7fff  libJP2.dylib (2130.7.3) <20747AB5-CFA0-3C7A-BE41-BF4B54FD2038> /System/Library/Frameworks/ImageIO.framework/Versions/A/Resources/libJP2.dylib
    0x7fff2b9f8000 -     0x7fff2b9fbfff  com.apple.WatchdogClient.framework (1.0 - 98.120.2) <0A097C25-405B-38CD-B6E2-57F51AD77AF0> /System/Library/PrivateFrameworks/WatchdogClient.framework/Versions/A/WatchdogClient
    0x7fff2b9fc000 -     0x7fff2ba32fff  com.apple.MultitouchSupport.framework (4440.3 - 4440.3) <0DF955E2-E57C-3C1B-96BD-5B81DAD43BC7> /System/Library/PrivateFrameworks/MultitouchSupport.framework/Versions/A/MultitouchSupport
    0x7fff2ba33000 -     0x7fff2bb91fff  com.apple.VideoToolbox (1.0 - 2780.10) <4FF9A4C0-FFB4-3F68-9A84-949B4DB0DB7A> /System/Library/Frameworks/VideoToolbox.framework/Versions/A/VideoToolbox
    0x7fff2bb92000 -     0x7fff2bbc5fff  libAudioToolboxUtility.dylib (1181.72) <9D9EA545-924D-342A-BF27-C19887850F05> /usr/lib/libAudioToolboxUtility.dylib
    0x7fff2bbc6000 -     0x7fff2bbe6fff  libPng.dylib (2130.7.3) <29756FE6-34E9-3760-9B70-9FF6648BE7CC> /System/Library/Frameworks/ImageIO.framework/Versions/A/Resources/libPng.dylib
    0x7fff2bbe7000 -     0x7fff2bc46fff  libTIFF.dylib (2130.7.3) <692B9470-8F28-3C98-9C6A-DAE79FE0136F> /System/Library/Frameworks/ImageIO.framework/Versions/A/Resources/libTIFF.dylib
    0x7fff2bc47000 -     0x7fff2bc63fff  com.apple.IOPresentment (58 - 37) <A86E6181-E216-3691-A7FF-0264A927C8CC> /System/Library/PrivateFrameworks/IOPresentment.framework/Versions/A/IOPresentment
    0x7fff2bc64000 -     0x7fff2bc6bfff  com.apple.GPUWrangler (6.3.5 - 6.3.5) <CC101DAE-349B-3C72-9554-6F569364841E> /System/Library/PrivateFrameworks/GPUWrangler.framework/Versions/A/GPUWrangler
    0x7fff2bc6c000 -     0x7fff2bc6ffff  libRadiance.dylib (2130.7.3) <1A759A2B-28E8-32C4-940D-BE0239558098> /System/Library/Frameworks/ImageIO.framework/Versions/A/Resources/libRadiance.dylib
    0x7fff2bc70000 -     0x7fff2bc75fff  com.apple.DSExternalDisplay (3.1 - 380) <3FD5886F-5EDD-313D-9783-FF899E5F2650> /System/Library/PrivateFrameworks/DSExternalDisplay.framework/Versions/A/DSExternalDisplay
    0x7fff2bc76000 -     0x7fff2bc9afff  libJPEG.dylib (2130.7.3) <C0903C97-523A-3822-ABE4-D1047D6785DC> /System/Library/Frameworks/ImageIO.framework/Versions/A/Resources/libJPEG.dylib
    0x7fff2bc9b000 -     0x7fff2bccafff  com.apple.ATSUI (1.0 - 1) <F9BEFF92-E409-35B6-89CB-0F221D804D3C> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/ATSUI.framework/Versions/A/ATSUI
    0x7fff2bccb000 -     0x7fff2bccffff  libGIF.dylib (2130.7.3) <E92A145C-2B76-39D1-B481-B7C95ACBF989> /System/Library/Frameworks/ImageIO.framework/Versions/A/Resources/libGIF.dylib
    0x7fff2bcd0000 -     0x7fff2bcd9fff  com.apple.CMCaptureCore (1.0 - 82.6) <E0EAD649-4C7A-384E-999B-4D82AA9CDA52> /System/Library/PrivateFrameworks/CMCaptureCore.framework/Versions/A/CMCaptureCore
    0x7fff2bcda000 -     0x7fff2bd21fff  com.apple.print.framework.PrintCore (16.1 - 531.1) <035969B9-3323-3AF4-AC4C-1D5B941C7C62> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/PrintCore.framework/Versions/A/PrintCore
    0x7fff2bd22000 -     0x7fff2bdeffff  com.apple.TextureIO (3.10.9 - 3.10.9) <4B778275-5F2D-36DA-A6AD-14C8E516E197> /System/Library/PrivateFrameworks/TextureIO.framework/Versions/A/TextureIO
    0x7fff2bdf0000 -     0x7fff2bdf8fff  com.apple.InternationalSupport (1.0 - 61.1) <56A6D4F8-FF5B-3F34-BD1A-249414F182E9> /System/Library/PrivateFrameworks/InternationalSupport.framework/Versions/A/InternationalSupport
    0x7fff2bdf9000 -     0x7fff2be73fff  com.apple.datadetectorscore (8.0 - 674) <CDA8DABD-62A3-3E1C-9A76-B00E1E950254> /System/Library/PrivateFrameworks/DataDetectorsCore.framework/Versions/A/DataDetectorsCore
    0x7fff2be74000 -     0x7fff2bed1fff  com.apple.UserActivity (439 - 439) <C272F369-1086-317C-A4CF-AE2E1EC4FFB4> /System/Library/PrivateFrameworks/UserActivity.framework/Versions/A/UserActivity
    0x7fff2bed2000 -     0x7fff2c66efff  com.apple.MediaToolbox (1.0 - 2780.10) <AFB06F1B-22BA-3DB7-B6E4-3C55F0A4BECF> /System/Library/Frameworks/MediaToolbox.framework/Versions/A/MediaToolbox
    0x7fff2caaf000 -     0x7fff2cb15fff  com.apple.imfoundation (10.0 - 1000) <1D902049-CAD5-3DE0-AE4A-9AACEBB586BE> /System/Library/PrivateFrameworks/IMFoundation.framework/Versions/A/IMFoundation
    0x7fff2cb16000 -     0x7fff2cb3efff  com.apple.locationsupport (2420.19.23 - 2420.19.23) <9A015D62-2143-3199-AD14-ECA953A728D3> /System/Library/PrivateFrameworks/LocationSupport.framework/Versions/A/LocationSupport
    0x7fff2cb3f000 -     0x7fff2cb70fff  libSessionUtility.dylib (76.69) <400DF595-A30C-3AD3-A8BA-25260299ACE6> /System/Library/PrivateFrameworks/AudioSession.framework/libSessionUtility.dylib
    0x7fff2cb71000 -     0x7fff2cca5fff  com.apple.audio.toolbox.AudioToolbox (1.14 - 1.14) <93226BB9-165F-3A42-8EE3-9670394C4DC9> /System/Library/Frameworks/AudioToolbox.framework/Versions/A/AudioToolbox
    0x7fff2cca6000 -     0x7fff2cd0bfff  com.apple.audio.AudioSession (1.0 - 76.69) <ADC1C8FC-A444-3F15-A396-B4AB688BB326> /System/Library/PrivateFrameworks/AudioSession.framework/Versions/A/AudioSession
    0x7fff2cd0c000 -     0x7fff2cd1efff  libAudioStatistics.dylib (27.64) <74E8B615-03FE-327B-A8FB-EAC5EF117414> /usr/lib/libAudioStatistics.dylib
    0x7fff2cd1f000 -     0x7fff2cd2efff  com.apple.speech.synthesis.framework (9.0.66 - 9.0.66) <CE36276F-23DD-32A3-9863-D3A5DDE5965E> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/SpeechSynthesis.framework/Versions/A/SpeechSynthesis
    0x7fff2cd2f000 -     0x7fff2cd9bfff  com.apple.ApplicationServices.ATS (377 - 516) <6E601872-2340-3675-9B6F-0C1DB991C54E> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/ATS.framework/Versions/A/ATS
    0x7fff2cd9c000 -     0x7fff2cdb4fff  libresolv.9.dylib (68) <86A4BABF-3EFC-3113-BE8A-2D1AAAEF0194> /usr/lib/libresolv.9.dylib
    0x7fff2cdb5000 -     0x7fff2cdc8fff  libsasl2.2.dylib (214) <601780A9-26F4-36A4-83EA-864841219797> /usr/lib/libsasl2.2.dylib
    0x7fff2ce35000 -     0x7fff2ce68fff  com.apple.securityinterface (10.0 - 55149.120.1) <10A7DFC1-8C46-382C-AEF0-89B151767F50> /System/Library/Frameworks/SecurityInterface.framework/Versions/A/SecurityInterface
    0x7fff2ce82000 -     0x7fff2cee6fff  com.apple.CoreMediaIO (1000.0 - 5325) <42F6129C-48E9-316A-9F30-2FA4D96F709F> /System/Library/Frameworks/CoreMediaIO.framework/Versions/A/CoreMediaIO
    0x7fff2cee7000 -     0x7fff2cfc6fff  libSMC.dylib (20) <CF88A94C-B5EE-306F-96A3-1442BA061C46> /usr/lib/libSMC.dylib
    0x7fff2cfc7000 -     0x7fff2d026fff  libcups.2.dylib (494.3) <2CE9752F-8763-3456-83CF-E4BCFB731153> /usr/lib/libcups.2.dylib
    0x7fff2d027000 -     0x7fff2d036fff  com.apple.LangAnalysis (1.7.0 - 254) <AB67008E-5986-3974-B986-FDBFAC018CAB> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/LangAnalysis.framework/Versions/A/LangAnalysis
    0x7fff2d037000 -     0x7fff2d041fff  com.apple.NetAuth (6.2 - 6.2) <B5806BA7-9A6E-37A0-9AB9-6EC2D61844AC> /System/Library/PrivateFrameworks/NetAuth.framework/Versions/A/NetAuth
    0x7fff2d042000 -     0x7fff2d049fff  com.apple.ColorSyncLegacy (4.13.0 - 1) <86D9E9C9-C631-371E-824E-A203FE9E560A> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/ColorSyncLegacy.framework/Versions/A/ColorSyncLegacy
    0x7fff2d04a000 -     0x7fff2d055fff  com.apple.QD (4.0 - 416) <1D8792FC-4A76-3B4F-82CF-3889C05768FE> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/QD.framework/Versions/A/QD
    0x7fff2d056000 -     0x7fff2d6aafff  com.apple.audio.AudioResourceArbitration (1.0 - 1) <C97CD66B-8267-3C39-B025-789864237928> /System/Library/PrivateFrameworks/AudioResourceArbitration.framework/Versions/A/AudioResourceArbitration
    0x7fff2d6ab000 -     0x7fff2d6b6fff  com.apple.perfdata (1.0 - 67.40.1) <10E2B0C5-83A4-368A-B972-7AFA40D5338C> /System/Library/PrivateFrameworks/perfdata.framework/Versions/A/perfdata
    0x7fff2d6b7000 -     0x7fff2d6c5fff  libperfcheck.dylib (41) <A2D0E1A8-A98F-3DAA-B9FC-C033FC4CD9E0> /usr/lib/libperfcheck.dylib
    0x7fff2d6c6000 -     0x7fff2d6d5fff  com.apple.Kerberos (3.0 - 1) <0074E20F-E7D8-31F5-AF41-0D7BF370CD50> /System/Library/Frameworks/Kerberos.framework/Versions/A/Kerberos
    0x7fff2d6d6000 -     0x7fff2d726fff  com.apple.GSS (4.0 - 2.0) <D546E52C-295F-3CCD-9925-03632FE72ECB> /System/Library/Frameworks/GSS.framework/Versions/A/GSS
    0x7fff2d727000 -     0x7fff2d737fff  com.apple.CommonAuth (4.0 - 2.0) <DF20551B-1514-39B3-A52E-681A2E5F0D1C> /System/Library/PrivateFrameworks/CommonAuth.framework/Versions/A/CommonAuth
    0x7fff2d760000 -     0x7fff2d78cfff  com.apple.CacheDelete (1.0 - 1) <FB1E1322-C50B-38DD-86CE-9AEC925628A3> /System/Library/PrivateFrameworks/CacheDelete.framework/Versions/A/CacheDelete
    0x7fff2d78d000 -     0x7fff2d7acfff  com.apple.security.KeychainCircle.KeychainCircle (1.0 - 1) <C48DA26A-6A69-3497-B94D-43332354162B> /System/Library/PrivateFrameworks/KeychainCircle.framework/Versions/A/KeychainCircle
    0x7fff2d7ad000 -     0x7fff2d7b5fff  com.apple.CorePhoneNumbers (1.0 - 1) <9F49D632-C5F4-37F5-A2A8-2830A7560138> /System/Library/PrivateFrameworks/CorePhoneNumbers.framework/Versions/A/CorePhoneNumbers
    0x7fff2d7b6000 -     0x7fff2d83ffff  libTelephonyUtilDynamic.dylib (5359.1) <DDF9B2A1-D071-3180-9BC6-A143D6D9E713> /usr/lib/libTelephonyUtilDynamic.dylib
    0x7fff2d908000 -     0x7fff2d908fff  liblaunch.dylib (2038.120.1) <4A353070-A560-3A98-8869-28C92435C6B2> /usr/lib/system/liblaunch.dylib
    0x7fff2de8d000 -     0x7fff2df8efff  com.apple.ids (10.0 - 1000) <F30AC7B8-FACA-3B37-914D-C7AFA47A9DAE> /System/Library/PrivateFrameworks/IDS.framework/Versions/A/IDS
    0x7fff2df8f000 -     0x7fff2e0e9fff  com.apple.idsfoundation (10.0 - 1000) <3EAAA079-B3EE-3A12-B181-3267029FB4B0> /System/Library/PrivateFrameworks/IDSFoundation.framework/Versions/A/IDSFoundation
    0x7fff2e0ea000 -     0x7fff2e235fff  com.apple.Sharing (1630 - 1630) <CE657A48-7BDD-34D7-9CBC-B1D6AD94B2B2> /System/Library/PrivateFrameworks/Sharing.framework/Versions/A/Sharing
    0x7fff2e236000 -     0x7fff2e357fff  com.apple.Bluetooth (8.0.5 - 8.0.5d7) <D011494A-287B-3487-B817-2329843C2486> /System/Library/Frameworks/IOBluetooth.framework/Versions/A/IOBluetooth
    0x7fff2e371000 -     0x7fff2e3cafff  com.apple.ProtectedCloudStorage (1.0 - 1) <EA0958A6-8296-3E23-81BE-297473A6E17E> /System/Library/PrivateFrameworks/ProtectedCloudStorage.framework/Versions/A/ProtectedCloudStorage
    0x7fff2e3cb000 -     0x7fff2e42afff  com.apple.QuickLookFramework (5.0 - 928.4) <C7DA2119-94CA-320B-9FBE-9AB4F9F384DA> /System/Library/Frameworks/QuickLook.framework/Versions/A/QuickLook
    0x7fff2e42b000 -     0x7fff2e446fff  com.apple.MetalKit (147.1 - 147.1) <F9EF05E2-2410-30A4-B9E0-8E19621D3434> /System/Library/Frameworks/MetalKit.framework/Versions/A/MetalKit
    0x7fff2e62a000 -     0x7fff2fb25fff  com.apple.GeoServices (1.0 - 1757.26.6.2.2) <1A271F08-3D05-36BF-A136-7D48B4418CD6> /System/Library/PrivateFrameworks/GeoServices.framework/Versions/A/GeoServices
    0x7fff2fb26000 -     0x7fff2fb31fff  com.apple.DirectoryService.Framework (11.6 - 230.40.1) <A0B99619-47BD-3D1C-8CAA-EE25139753F6> /System/Library/Frameworks/DirectoryService.framework/Versions/A/DirectoryService
    0x7fff2fb32000 -     0x7fff2fb59fff  com.apple.RemoteViewServices (2.0 - 163) <7DBF2A51-CE8E-352E-9426-B83DC370ADDD> /System/Library/PrivateFrameworks/RemoteViewServices.framework/Versions/A/RemoteViewServices
    0x7fff2fb5a000 -     0x7fff2fb69fff  com.apple.SpeechRecognitionCore (6.1.25 - 6.1.25) <076E6A5F-4FEE-378B-9DCD-AFFA1348C64F> /System/Library/PrivateFrameworks/SpeechRecognitionCore.framework/Versions/A/SpeechRecognitionCore
    0x7fff2fb6a000 -     0x7fff2fb71fff  com.apple.speech.recognition.framework (6.0.3 - 6.0.3) <DB80BAB9-5E83-32DB-A424-05BB19044665> /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/SpeechRecognition.framework/Versions/A/SpeechRecognition
    0x7fff2fd9f000 -     0x7fff2fd9ffff  libsystem_product_info_filter.dylib (8.40.1) <78928329-DD98-3799-989D-870DF92FE8D5> /usr/lib/system/libsystem_product_info_filter.dylib
    0x7fff2fe77000 -     0x7fff2fe77fff  com.apple.Accelerate.vecLib (3.11 - vecLib 3.11) <CDB56324-715E-3223-903F-EEC1D4E57F14> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/vecLib
    0x7fff2fe9d000 -     0x7fff2fe9dfff  com.apple.CoreServices (1122.44 - 1122.44) <104E1757-7D8A-32D3-9B38-B23B1A8EAB17> /System/Library/Frameworks/CoreServices.framework/Versions/A/CoreServices
    0x7fff30059000 -     0x7fff30059fff  com.apple.Accelerate (1.11 - Accelerate 1.11) <28463942-495F-3231-9348-32ABC601A1F5> /System/Library/Frameworks/Accelerate.framework/Versions/A/Accelerate
    0x7fff3009a000 -     0x7fff300a5fff  com.apple.MediaAccessibility (1.0 - 130) <677557AF-6AC1-3860-B7C4-772B8DA9957B> /System/Library/Frameworks/MediaAccessibility.framework/Versions/A/MediaAccessibility
    0x7fff300a6000 -     0x7fff300c5fff  com.apple.networking.AlgosScoreFramework (1.0 - 1) <BFF296BB-6E78-3213-B453-31AA58FC13E0> /System/Library/PrivateFrameworks/AlgosScoreFramework.framework/Versions/A/AlgosScoreFramework
    0x7fff300c6000 -     0x7fff300cafff  com.apple.AppleSRP (5.0 - 1) <A8B167C6-9E49-3ED9-AD87-36BEA98F6E20> /System/Library/PrivateFrameworks/AppleSRP.framework/Versions/A/AppleSRP
    0x7fff300cb000 -     0x7fff300d6fff  com.apple.frameworks.CoreDaemon (1.3 - 1.3) <6873367E-2879-3C96-A766-AD6DFD69F36A> /System/Library/PrivateFrameworks/CoreDaemon.framework/Versions/B/CoreDaemon
    0x7fff300d7000 -     0x7fff3010efff  com.apple.framework.SystemAdministration (1.0 - 1.0) <84CB0B6A-46C1-3A8E-81D4-CC44DF0AFF83> /System/Library/PrivateFrameworks/SystemAdministration.framework/Versions/A/SystemAdministration
    0x7fff3089b000 -     0x7fff30900fff  com.apple.CoreBluetooth (1.0 - 1) <32288DE3-BD59-35A6-9165-73176E074499> /System/Library/Frameworks/CoreBluetooth.framework/Versions/A/CoreBluetooth
    0x7fff30901000 -     0x7fff3090afff  com.apple.SymptomDiagnosticReporter (1.0 - 79.120.1) <9A1589E7-0B3A-3DC5-967C-7A3D4C14ED1E> /System/Library/PrivateFrameworks/SymptomDiagnosticReporter.framework/Versions/A/SymptomDiagnosticReporter
    0x7fff3090b000 -     0x7fff3091dfff  com.apple.PowerLog (1.0 - 1) <7A3E3B4D-5DA4-3D01-9188-4FE8A6859D15> /System/Library/PrivateFrameworks/PowerLog.framework/Versions/A/PowerLog
    0x7fff3091e000 -     0x7fff3092afff  com.apple.AppleIDAuthSupport (1.0 - 1) <C391F5AD-7903-31AF-8608-7826C0EFB3C5> /System/Library/PrivateFrameworks/AppleIDAuthSupport.framework/Versions/A/AppleIDAuthSupport
    0x7fff3092b000 -     0x7fff309d3fff  com.apple.DiscRecording (9.0.3 - 9030.4.5) <08A9AAA6-7057-3105-BDE1-DC7270C38774> /System/Library/Frameworks/DiscRecording.framework/Versions/A/DiscRecording
    0x7fff309d4000 -     0x7fff30a07fff  com.apple.MediaKit (16 - 927.40.2) <86B948D3-5757-37A7-B2DA-F7C50778B108> /System/Library/PrivateFrameworks/MediaKit.framework/Versions/A/MediaKit
    0x7fff30a08000 -     0x7fff30af3fff  com.apple.DiskManagement (14.0 - 1733.140.2) <CF6680B9-9799-3DE8-A600-094260672A4F> /System/Library/PrivateFrameworks/DiskManagement.framework/Versions/A/DiskManagement
    0x7fff30af4000 -     0x7fff30eaefff  com.apple.CoreAUC (326.2.0 - 326.2.0) <58430C09-401A-3B4C-806E-E87C46816939> /System/Library/PrivateFrameworks/CoreAUC.framework/Versions/A/CoreAUC
    0x7fff30eaf000 -     0x7fff30eb2fff  com.apple.Mangrove (1.0 - 25) <0E9FF438-D4B3-3DF1-B8A7-64623282B9B3> /System/Library/PrivateFrameworks/Mangrove.framework/Versions/A/Mangrove
    0x7fff30eb3000 -     0x7fff30ee0fff  com.apple.CoreAVCHD (6.1.0 - 6100.4.1) <80DEBCCB-A598-3CE5-B988-FFC5B81389CF> /System/Library/PrivateFrameworks/CoreAVCHD.framework/Versions/A/CoreAVCHD
    0x7fff30ee1000 -     0x7fff31030fff  com.apple.FileProvider (349.4.3 - 349.4.3) <E07C8909-299C-3696-BD84-5CF42EE64EE4> /System/Library/Frameworks/FileProvider.framework/Versions/A/FileProvider
    0x7fff31031000 -     0x7fff31053fff  com.apple.GenerationalStorage (2.0 - 323) <9E36AF92-10E2-382B-A07C-4E3270448690> /System/Library/PrivateFrameworks/GenerationalStorage.framework/Versions/A/GenerationalStorage
    0x7fff313c9000 -     0x7fff31497fff  com.apple.CoreTelephony (113 - 8260) <DFBE4145-7D80-3F7B-8C37-746D9D63DAC6> /System/Library/Frameworks/CoreTelephony.framework/Versions/A/CoreTelephony
    0x7fff314bc000 -     0x7fff31650fff  com.apple.AVFCore (1.0 - 2020.10) <85D55F46-61B4-3A08-8B13-1A678B571D66> /System/Library/PrivateFrameworks/AVFCore.framework/Versions/A/AVFCore
    0x7fff31651000 -     0x7fff316c0fff  com.apple.FrontBoardServices (703.16 - 703.16) <5088E177-3DF7-3F48-B340-7E6FF569C1E2> /System/Library/PrivateFrameworks/FrontBoardServices.framework/Versions/A/FrontBoardServices
    0x7fff316c1000 -     0x7fff316eafff  com.apple.BoardServices (1.0 - 526) <9932480F-CA31-362C-B5BB-263998D63224> /System/Library/PrivateFrameworks/BoardServices.framework/Versions/A/BoardServices
    0x7fff3172c000 -     0x7fff31747fff  com.apple.ExtensionKit (19.4 - 19.4) <D5A2BF7D-F72D-30D4-A12C-2B23A25C53FF> /System/Library/PrivateFrameworks/ExtensionKit.framework/Versions/A/ExtensionKit
    0x7fff31748000 -     0x7fff3174efff  com.apple.ExtensionFoundation (19.4 - 19.4) <911C2C6B-8D5E-301E-8845-ABE770077044> /System/Library/PrivateFrameworks/ExtensionFoundation.framework/Versions/A/ExtensionFoundation
    0x7fff3174f000 -     0x7fff31794fff  com.apple.CryptoTokenKit (1.0 - 1) <85356F88-7E90-357C-A0CE-B580616C1CEF> /System/Library/Frameworks/CryptoTokenKit.framework/Versions/A/CryptoTokenKit
    0x7fff31795000 -     0x7fff317abfff  com.apple.LocalAuthentication (1.0 - 827.140.1) <D833E8C1-2038-3C12-9EEC-30D8F9F48702> /System/Library/Frameworks/LocalAuthentication.framework/Versions/A/LocalAuthentication
    0x7fff317ac000 -     0x7fff317d9fff  com.apple.CoreAuthentication.SharedUtils (1.0 - 827.140.1) <DCB4A9AE-4CE3-302E-8633-4F54DE1C1050> /System/Library/Frameworks/LocalAuthentication.framework/Support/SharedUtils.framework/Versions/A/SharedUtils
    0x7fff3184e000 -     0x7fff3188ffff  com.apple.CoreHaptics (1.0 - 1) <8B6CA9A4-26B2-31AD-A763-F905F126900D> /System/Library/Frameworks/CoreHaptics.framework/Versions/A/CoreHaptics
    0x7fff3189d000 -     0x7fff318dcfff  com.apple.AppleVPAFramework (3.26.1 - 3.26.1) <B7DF9782-C63B-32F0-A008-E83503C76E78> /System/Library/PrivateFrameworks/AppleVPA.framework/Versions/A/AppleVPA
    0x7fff3198f000 -     0x7fff319cafff  com.apple.DebugSymbols (195.1 - 195.1) <7D2E32A0-DB93-36EE-AE9C-7974708CF4FC> /System/Library/PrivateFrameworks/DebugSymbols.framework/Versions/A/DebugSymbols
    0x7fff319cb000 -     0x7fff31a80fff  com.apple.CoreSymbolication (12.5 - 64544.81.1) <7215543C-E3B6-30A0-8B21-7FBDFB10F198> /System/Library/PrivateFrameworks/CoreSymbolication.framework/Versions/A/CoreSymbolication
    0x7fff31a81000 -     0x7fff31a8afff  com.apple.CoreTime (284.0.4) <DAEEF1D8-1C34-37AC-9691-C4540C92E9F9> /System/Library/PrivateFrameworks/CoreTime.framework/Versions/A/CoreTime
    0x7fff31a8b000 -     0x7fff31b00fff  com.apple.Rapport (2.6.0 - 260.3) <55CA4269-E06C-3E4E-BB3D-957469333D9C> /System/Library/PrivateFrameworks/Rapport.framework/Versions/A/Rapport
    0x7fff323d5000 -     0x7fff32421fff  com.apple.coreduetcontext (1.0 - 1) <F343EE71-43B3-366E-A3C3-7FC0DD79D70F> /System/Library/PrivateFrameworks/CoreDuetContext.framework/Versions/A/CoreDuetContext
    0x7fff32422000 -     0x7fff3298efff  com.apple.Intents (1.0 - 1) <CA14EA98-180D-3AEC-9900-8B6BE616DA5C> /System/Library/Frameworks/Intents.framework/Versions/A/Intents
    0x7fff3298f000 -     0x7fff329f2fff  com.apple.framework.Apple80211 (17.0 - 1728) <D89EA57A-D351-3BD1-A470-505C6D8BF4D6> /System/Library/PrivateFrameworks/Apple80211.framework/Versions/A/Apple80211
    0x7fff329f3000 -     0x7fff32b44fff  com.apple.CoreWiFi (3.0 - 341) <0FE4018E-E199-3923-A56D-430E40F5EEB7> /System/Library/PrivateFrameworks/CoreWiFi.framework/Versions/A/CoreWiFi
    0x7fff32b45000 -     0x7fff32b5ffff  com.apple.BackBoardServices (1.0 - 1.0) <C21E697A-AB8B-3353-9B92-7DB6C09DE34D> /System/Library/PrivateFrameworks/BackBoardServices.framework/Versions/A/BackBoardServices
    0x7fff32b60000 -     0x7fff32b97fff  com.apple.LDAPFramework (2.4.28 - 194.5) <327E5362-4AA3-3610-B126-CAC243121EA8> /System/Library/Frameworks/LDAP.framework/Versions/A/LDAP
    0x7fff32b98000 -     0x7fff32b99fff  com.apple.TrustEvaluationAgent (2.0 - 35) <CA7542A0-0CE3-39E9-9FF0-F827CC4633AC> /System/Library/PrivateFrameworks/TrustEvaluationAgent.framework/Versions/A/TrustEvaluationAgent
    0x7fff32b9a000 -     0x7fff32c9ffff  libcrypto.44.dylib (56.60.2) <90125B07-6FE0-3D39-947D-0C39B9DF6C43> /usr/lib/libcrypto.44.dylib
    0x7fff32ca0000 -     0x7fff32ccdfff  libssl.46.dylib (56.60.2) <53F0CF92-264C-3210-852F-B2B65885E675> /usr/lib/libssl.46.dylib
    0x7fff32cce000 -     0x7fff32d7dfff  com.apple.DiskImagesFramework (595.140.1 - 595.140.1) <6A804C50-8819-39A1-AF4E-4E71C6BD8DAB> /System/Library/PrivateFrameworks/DiskImages.framework/Versions/A/DiskImages
    0x7fff32db5000 -     0x7fff32dc4fff  com.apple.RemoteServiceDiscovery (1.0 - 1.120.1) <8F0CFA90-78B8-3305-BCD3-6C28B7838CE0> /System/Library/PrivateFrameworks/RemoteServiceDiscovery.framework/Versions/A/RemoteServiceDiscovery
    0x7fff32e22000 -     0x7fff32e25fff  com.apple.help (1.3.8 - 71) <CF14979A-CA27-32D1-A3E8-D99AD6C91464> /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/Help.framework/Versions/A/Help
    0x7fff32e26000 -     0x7fff32e2dfff  com.apple.EFILogin (2.0 - 2) <77A5D3D5-3B8D-3B5D-A1BD-A7614C86AF67> /System/Library/PrivateFrameworks/EFILogin.framework/Versions/A/EFILogin
    0x7fff32e2e000 -     0x7fff32e39fff  libcsfde.dylib (554.140.2) <8B6A31B3-9421-3BAE-882B-8BEF5217E251> /usr/lib/libcsfde.dylib
    0x7fff32e3a000 -     0x7fff32ea0fff  libcurl.4.dylib (121.101.1) <8ACEDAF2-5907-3F4A-9595-F52681D0F470> /usr/lib/libcurl.4.dylib
    0x7fff32ea1000 -     0x7fff32ea8fff  com.apple.LoginUICore (4.0 - 4.0) <F8CF5AD4-6A49-3EFC-B1FA-BD83B0095CBB> /System/Library/PrivateFrameworks/LoginUIKit.framework/Versions/A/Frameworks/LoginUICore.framework/Versions/A/LoginUICore
    0x7fff32ea9000 -     0x7fff32f0bfff  com.apple.AppSupport (1.0.0 - 29) <7F288248-AB86-3AAC-9528-1A62E0E77528> /System/Library/PrivateFrameworks/AppSupport.framework/Versions/A/AppSupport
    0x7fff32fab000 -     0x7fff3306ffff  com.apple.GameController (1.0 - 1) <68352436-3E7E-30BE-B804-E8EDE0658BB3> /System/Library/Frameworks/GameController.framework/Versions/A/GameController
    0x7fff33078000 -     0x7fff33078fff  com.apple.ApplicationServices (48 - 50) <52BB5EB6-2C1B-34F9-8665-F50DD078E71B> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/ApplicationServices
    0x7fff330f5000 -     0x7fff33239fff  com.apple.AppleAccount (1.0 - 1.0) <B304AA07-C970-3195-B4BE-978E3CA2856F> /System/Library/PrivateFrameworks/AppleAccount.framework/Versions/A/AppleAccount
    0x7fff3323a000 -     0x7fff33279fff  com.apple.AppleIDSSOAuthentication (1.0 - 1) <AB9B31C6-653B-38AF-852A-10FB097BA818> /System/Library/PrivateFrameworks/AppleIDSSOAuthentication.framework/Versions/A/AppleIDSSOAuthentication
    0x7fff3338d000 -     0x7fff3338dfff  libHeimdalProxy.dylib (79) <A1B83B1E-006D-38A8-8878-FD6ECBBB9B1B> /System/Library/Frameworks/Kerberos.framework/Versions/A/Libraries/libHeimdalProxy.dylib
    0x7fff33440000 -     0x7fff33440fff  com.apple.audio.units.AudioUnit (1.14 - 1.14) <0A5BB3A7-D9DC-346C-9FBB-FB075194E7AC> /System/Library/Frameworks/AudioUnit.framework/Versions/A/AudioUnit
    0x7fff334a8000 -     0x7fff334c6fff  com.apple.DuetActivityScheduler (1.0 - 1) <AEA67F50-E42E-37A5-BF75-6666CD80C19C> /System/Library/PrivateFrameworks/DuetActivityScheduler.framework/Versions/A/DuetActivityScheduler
    0x7fff334db000 -     0x7fff334e7fff  com.apple.IntentsFoundation (1.0 - 1) <90F93D25-8C0E-37FF-A480-0CC95E080E7C> /System/Library/PrivateFrameworks/IntentsFoundation.framework/Versions/A/IntentsFoundation
    0x7fff334e8000 -     0x7fff334edfff  com.apple.PushKit (1.0 - 1) <02EC6449-963F-376C-BE24-F9CC8083ABD3> /System/Library/Frameworks/PushKit.framework/Versions/A/PushKit
    0x7fff334ee000 -     0x7fff33521fff  com.apple.C2 (1.3 - 573) <1D8BCCDC-EFB0-3DF8-93A4-4D18388D7C11> /System/Library/PrivateFrameworks/C2.framework/Versions/A/C2
    0x7fff33522000 -     0x7fff33552fff  com.apple.QuickLookThumbnailing (1.0 - 135.5) <7B9EC715-B18C-3194-B78C-24358F1BEEFE> /System/Library/Frameworks/QuickLookThumbnailing.framework/Versions/A/QuickLookThumbnailing
    0x7fff33553000 -     0x7fff33d54fff  com.apple.vision.EspressoFramework (1.0 - 256.4.4) <46EB212E-0528-3D15-AAA4-207E8B197A75> /System/Library/PrivateFrameworks/Espresso.framework/Versions/A/Espresso
    0x7fff33d55000 -     0x7fff33d6cfff  com.apple.ANEServices (4.76 - 4.76) <E54FB6F5-CBF8-3ED2-A73B-47C6D87910A4> /System/Library/PrivateFrameworks/ANEServices.framework/Versions/A/ANEServices
    0x7fff33e81000 -     0x7fff33e83fff  com.apple.CoreDuetDebugLogging (1.0 - 1) <47F03D98-3BF5-3CAB-B83D-A30A59A5B068> /System/Library/PrivateFrameworks/CoreDuetDebugLogging.framework/Versions/A/CoreDuetDebugLogging
    0x7fff33e84000 -     0x7fff33e90fff  com.apple.CoreDuetDaemonProtocol (1.0 - 1) <B6BADDAF-0F79-30B6-8CD4-83C8ACDB12D0> /System/Library/PrivateFrameworks/CoreDuetDaemonProtocol.framework/Versions/A/CoreDuetDaemonProtocol
    0x7fff34410000 -     0x7fff34460fff  com.apple.ChunkingLibrary (334.1 - 334.1) <2CD91198-1354-357F-8858-D58244526C15> /System/Library/PrivateFrameworks/ChunkingLibrary.framework/Versions/A/ChunkingLibrary
    0x7fff34cd4000 -     0x7fff34ce9fff  com.apple.CoreML.AppleNeuralEngine (1.0 - 1) <C3AA92B0-9BF9-3806-A952-2A318AF1EEE4> /System/Library/PrivateFrameworks/AppleNeuralEngine.framework/Versions/A/AppleNeuralEngine
    0x7fff34d3f000 -     0x7fff34daafff  com.apple.audio.midi.CoreMIDI (2.0 - 88) <741CCF53-3F51-39A5-B07A-3C14BED77D44> /System/Library/Frameworks/CoreMIDI.framework/Versions/A/CoreMIDI
    0x7fff34e70000 -     0x7fff34e73fff  com.apple.Cocoa (6.11 - 23) <237F7F6E-E7D1-363A-92AF-32B564728891> /System/Library/Frameworks/Cocoa.framework/Versions/A/Cocoa
    0x7fff34ebd000 -     0x7fff352b1fff  com.apple.AppleMediaServices (1.0 - 1) <0EBC0F6F-3763-3E66-A92C-CCA9453326FE> /System/Library/PrivateFrameworks/AppleMediaServices.framework/Versions/A/AppleMediaServices
    0x7fff352e9000 -     0x7fff35761fff  com.apple.MediaRemote (1.0 - 1) <DEF1BED2-78C1-318C-8DB5-FD464941D48B> /System/Library/PrivateFrameworks/MediaRemote.framework/Versions/A/MediaRemote
    0x7fff35a5d000 -     0x7fff35a64fff  com.apple.DisplayServicesFW (3.1 - 380) <F794066C-55D0-3CC6-9BCD-C27207746B97> /System/Library/PrivateFrameworks/DisplayServices.framework/Versions/A/DisplayServices
    0x7fff362a6000 -     0x7fff362d6fff  libtidy.A.dylib (18.2) <1AF8A622-91F8-3193-BA3D-CB1A799565A8> /usr/lib/libtidy.A.dylib
    0x7fff362d7000 -     0x7fff362f7fff  com.apple.MarkupUI (1.0 - 383.6) <7396A399-E8CE-31B6-8F56-CCCA5BF72669> /System/Library/PrivateFrameworks/MarkupUI.framework/Versions/A/MarkupUI
    0x7fff362f8000 -     0x7fff3630bfff  com.apple.Engram (1.0 - 1) <AED2FFE9-3841-33B1-B552-A75B17A20A3A> /System/Library/PrivateFrameworks/Engram.framework/Versions/A/Engram
    0x7fff3630c000 -     0x7fff3632ffff  com.apple.openscripting (1.7 - 190) <A2516A00-ECC2-31F2-9157-90AF9A4C6F56> /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/OpenScripting.framework/Versions/A/OpenScripting
    0x7fff36330000 -     0x7fff36333fff  com.apple.securityhi (9.0 - 55008) <DDAD2F6D-2105-370E-9C96-63ABF95ABF00> /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/SecurityHI.framework/Versions/A/SecurityHI
    0x7fff36334000 -     0x7fff36337fff  com.apple.ink.framework (10.15 - 227) <6177BDED-F304-3EAD-B72E-23A050856753> /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/Ink.framework/Versions/A/Ink
    0x7fff36338000 -     0x7fff3633bfff  com.apple.CommonPanels (1.2.6 - 101) <E6BB8219-34DB-3A11-A3C2-B17AD8E42414> /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/CommonPanels.framework/Versions/A/CommonPanels
    0x7fff3633c000 -     0x7fff36343fff  com.apple.ImageCapture (1711.5.2 - 1711.5.2) <E3871995-745C-35A8-8B48-647DAAF046E1> /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/ImageCapture.framework/Versions/A/ImageCapture
    0x7fff36344000 -     0x7fff37534fff  com.apple.JavaScriptCore (16611 - 16611.3.10.1.6) <E1A54760-8F75-3A78-89F7-232D9EC162E8> /System/Library/Frameworks/JavaScriptCore.framework/Versions/A/JavaScriptCore
    0x7fff375a0000 -     0x7fff376b2fff  com.apple.AVFCapture (1.0 - 82.6) <FA7F06F5-9F18-3DF3-BB00-EA019050812E> /System/Library/PrivateFrameworks/AVFCapture.framework/Versions/A/AVFCapture
    0x7fff376b3000 -     0x7fff37746fff  com.apple.Quagga (47 - 47) <A2CD23BB-59D9-31ED-B980-4CF5379CABDE> /System/Library/PrivateFrameworks/Quagga.framework/Versions/A/Quagga
    0x7fff37747000 -     0x7fff37991fff  com.apple.CMCapture (1.0 - 82.6) <DC0EAADD-A8F6-3ECE-8D10-354103DB7767> /System/Library/PrivateFrameworks/CMCapture.framework/Versions/A/CMCapture
    0x7fff3838d000 -     0x7fff3839cfff  com.apple.HID (1.0 - 1) <2078CFB6-A410-3B7E-B012-AE2BF1A80887> /System/Library/PrivateFrameworks/HID.framework/Versions/A/HID
    0x7fff3839d000 -     0x7fff384c4fff  com.apple.QuickLookUIFramework (5.0 - 928.4) <6B0E42FA-C3F3-39CB-A7D0-D1172470B640> /System/Library/Frameworks/Quartz.framework/Versions/A/Frameworks/QuickLookUI.framework/Versions/A/QuickLookUI
    0x7fff38975000 -     0x7fff389b5fff  com.apple.MediaServices (1.0 - 1) <F226324E-830D-38BE-A1ED-0EC6A2ED82BB> /System/Library/PrivateFrameworks/MediaServices.framework/Versions/A/MediaServices
    0x7fff38ab1000 -     0x7fff38ab1fff  com.apple.marco (10.0 - 1000) <6E3E4EC3-3DD4-332D-8D0F-DC0F946269CB> /System/Library/PrivateFrameworks/Marco.framework/Versions/A/Marco
    0x7fff39165000 -     0x7fff3916cfff  com.apple.URLFormatting (146 - 146.22) <05567C81-E57E-3201-8DB5-9DC03762E7E7> /System/Library/PrivateFrameworks/URLFormatting.framework/Versions/A/URLFormatting
    0x7fff3bbce000 -     0x7fff3bbf0fff  com.apple.quicklook.QuickLookSupport (1.0 - 135.5) <CB82EDC5-2A69-3F7D-9A79-C4B186D6F807> /System/Library/PrivateFrameworks/QuickLookSupport.framework/Versions/A/QuickLookSupport
    0x7fff3bbf1000 -     0x7fff3bc88fff  com.apple.AirPlaySync (1.0 - 2780.10) <FE97137A-017E-392F-9457-1FF0ACB82681> /System/Library/PrivateFrameworks/AirPlaySync.framework/Versions/A/AirPlaySync
    0x7fff3c819000 -     0x7fff3c89cfff  com.apple.CorePDF (4.0 - 529) <C37DD615-4ABA-314C-985B-7E496184B997> /System/Library/PrivateFrameworks/CorePDF.framework/Versions/A/CorePDF
    0x7fff3c89d000 -     0x7fff3c8a0fff  com.apple.print.framework.Print (15 - 271) <29E7EB03-0307-35D9-B56F-B9DCB5C5A4E7> /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/Print.framework/Versions/A/Print
    0x7fff3c8a1000 -     0x7fff3c8a4fff  com.apple.Carbon (160 - 164) <B86E3835-F4BE-3DCA-88C7-CEA01227DF58> /System/Library/Frameworks/Carbon.framework/Versions/A/Carbon
    0x7fff3c99d000 -     0x7fff3c99dfff  com.apple.avfoundation (2.0 - 2020.10) <DF72C9C0-236F-326C-84C1-E4F25163310D> /System/Library/Frameworks/AVFoundation.framework/Versions/A/AVFoundation
    0x7fff3cb57000 -     0x7fff3cb76fff  com.apple.private.SystemPolicy (1.0 - 1) <8BC55621-1E45-33B3-BCD6-C59F1F390695> /System/Library/PrivateFrameworks/SystemPolicy.framework/Versions/A/SystemPolicy
    0x7fff3cd1a000 -     0x7fff3cd37fff  com.apple.sidecar-core (1.0 - 231) <D0C9A506-6BF0-3D13-9D10-489BF305CB79> /System/Library/PrivateFrameworks/SidecarCore.framework/Versions/A/SidecarCore
    0x7fff3cd38000 -     0x7fff3cd3bfff  com.apple.QuickLookNonBaseSystem (1.0 - 1) <6E5DDB55-9CD1-3245-939E-EA4081430444> /System/Library/PrivateFrameworks/QuickLookNonBaseSystem.framework/Versions/A/QuickLookNonBaseSystem
    0x7fff3d153000 -     0x7fff3d159fff  com.apple.FeatureFlagsSupport (1.0 - 28.60.1) <17CAEB39-7966-34B7-9E1B-55D64289BFAF> /System/Library/PrivateFrameworks/FeatureFlagsSupport.framework/Versions/A/FeatureFlagsSupport
    0x7fff3d2ca000 -     0x7fff3d2e1fff  com.apple.SafariServices.framework (16611 - 16611.3.10.1.6) <4AC4AD2E-B214-3244-B148-200EFBCE6884> /System/Library/Frameworks/SafariServices.framework/Versions/A/SafariServices
    0x7fff3d494000 -     0x7fff3d49ffff  com.apple.MallocStackLogging (1.0 - 1) <DF41452E-DA3E-3F74-9354-6F82BE363DB8> /System/Library/PrivateFrameworks/MallocStackLogging.framework/Versions/A/MallocStackLogging
    0x7fff3d4b4000 -     0x7fff3d4c6fff  libmis.dylib (274.140.2) <570E2D9A-BC76-37F7-8CFC-E18AD5E81CE0> /usr/lib/libmis.dylib
    0x7fff3d4e3000 -     0x7fff3d652fff  com.apple.CoreHandwriting (161 - 1.2) <DF7F9BC6-ACE1-32CE-9E1E-5642832E10E9> /System/Library/PrivateFrameworks/CoreHandwriting.framework/Versions/A/CoreHandwriting
    0x7fff3d653000 -     0x7fff3d8aefff  com.apple.imageKit (3.0 - 1100) <DFD1D9B4-41BE-30F1-A1B8-9925481B5DA2> /System/Library/Frameworks/Quartz.framework/Versions/A/Frameworks/ImageKit.framework/Versions/A/ImageKit
    0x7fff3d8af000 -     0x7fff3d9c5fff  com.apple.PencilKit (1.0 - 1) <924D651B-8645-3225-9DE4-BDAB27B1DED7> /System/Library/Frameworks/PencilKit.framework/Versions/A/PencilKit
    0x7fff3d9c6000 -     0x7fff3d9d7fff  com.apple.sidecar-ui (1.0 - 231) <363E669A-2E00-3EAB-A7F1-E85836913057> /System/Library/PrivateFrameworks/SidecarUI.framework/Versions/A/SidecarUI
    0x7fff3dffa000 -     0x7fff3e05cfff  com.apple.ImageCaptureCore (1711.5.2 - 1711.5.2) <BC3B41E7-DC5A-3611-ACCA-F9827979CA03> /System/Library/Frameworks/ImageCaptureCore.framework/Versions/A/ImageCaptureCore
    0x7fff3e05d000 -     0x7fff3e082fff  com.apple.quartzfilters (1.10.0 - 98) <B4874E51-0832-3240-8972-8375A13D372B> /System/Library/Frameworks/Quartz.framework/Versions/A/Frameworks/QuartzFilters.framework/Versions/A/QuartzFilters
    0x7fff3e2ce000 -     0x7fff3e430fff  com.apple.MediaPlayer (1.0 - 1.0) <C4577D13-9F8E-3AE5-9D3D-A292F2773A82> /System/Library/Frameworks/MediaPlayer.framework/Versions/A/MediaPlayer
    0x7fff3e431000 -     0x7fff3e712fff  com.apple.iTunesCloud (1.0 - 1) <CAD253D5-9CAC-368A-8EEB-8576B299256F> /System/Library/PrivateFrameworks/iTunesCloud.framework/Versions/A/iTunesCloud
    0x7fff3e73e000 -     0x7fff3e86afff  com.apple.AnnotationKit (1.0 - 383.6) <D8726DE5-7A61-3562-9A43-5D2F5E861335> /System/Library/PrivateFrameworks/AnnotationKit.framework/Versions/A/AnnotationKit
    0x7fff3e86b000 -     0x7fff3ed0bfff  com.apple.QuartzComposer (5.1 - 383) <7704093A-6C35-375F-AA17-756FABB66D1D> /System/Library/Frameworks/Quartz.framework/Versions/A/Frameworks/QuartzComposer.framework/Versions/A/QuartzComposer
    0x7fff3ed0c000 -     0x7fff3edf4fff  com.apple.PDFKit (1.0 - 950.40.3) <0538C0CD-02D4-3684-BBD1-AD5C9F861276> /System/Library/Frameworks/PDFKit.framework/Versions/A/PDFKit
    0x7fff3faf6000 -     0x7fff3fb2cfff  com.apple.MobileInstallation (2.0 - 1.0) <E0BBDC12-64FA-3B35-AF85-8B683B31C018> /System/Library/PrivateFrameworks/MobileInstallation.framework/Versions/A/MobileInstallation
    0x7fff40d53000 -     0x7fff40d56fff  com.apple.quartzframework (1.5 - 25) <CB57120A-C7D9-3999-9BD4-EB214E8E3CF3> /System/Library/Frameworks/Quartz.framework/Versions/A/Quartz
    0x7fff4117b000 -     0x7fff41199fff  libCGInterfaces.dylib (544.4) <05A5B7E9-C79A-3FEA-AD6C-72FE168004C3> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vImage.framework/Versions/A/Libraries/libCGInterfaces.dylib
    0x7fff41543000 -     0x7fff4159ffff  com.apple.AppStoreDaemon (1.0 - 1) <ADB47501-81CF-3155-B60A-1736AFDDE2E7> /System/Library/PrivateFrameworks/AppStoreDaemon.framework/Versions/A/AppStoreDaemon
    0x7fff44204000 -     0x7fff44208fff  com.apple.DAAPKit (1.0 - 1) <9947BB10-2335-3BB4-B884-9313DC160E59> /System/Library/PrivateFrameworks/DAAPKit.framework/Versions/A/DAAPKit
    0x7fff45b7f000 -     0x7fff45b82fff  libpmenergy.dylib (227.140.1) <CFCE74A5-EEF8-36E2-9717-8E4B45F2663C> /usr/lib/libpmenergy.dylib
    0x7fff478a4000 -     0x7fff478e4fff  com.apple.osanalytics.OSAnalytics (1.0 - 1) <19C9EC00-4A56-303C-9C22-47AF6222F1AF> /System/Library/PrivateFrameworks/OSAnalytics.framework/Versions/A/OSAnalytics
    0x7fff48132000 -     0x7fff4814dfff  com.apple.network.statistics.framework (1.2 - 1) <0AFE927D-702D-35F4-8938-BE33B1A95BF6> /System/Library/PrivateFrameworks/NetworkStatistics.framework/Versions/A/NetworkStatistics
    0x7fff48440000 -     0x7fff48447fff  com.apple.MobileSystemServices (1.0 - 1) <BB77CE92-0024-365B-86ED-46F4D0816BD9> /System/Library/PrivateFrameworks/MobileSystemServices.framework/Versions/A/MobileSystemServices
    0x7fff51563000 -     0x7fff51602fff  com.apple.Symbolication (12.5 - 64544.70.1) <262C27E9-D575-3209-8403-C314C534D1B0> /System/Library/PrivateFrameworks/Symbolication.framework/Versions/A/Symbolication
    0x7fff517f2000 -     0x7fff517f5fff  libpmsample.dylib (227.140.1) <B2B85546-A9D2-3919-A396-63A26011ECAC> /usr/lib/libpmsample.dylib
    0x7fff53e8a000 -     0x7fff53ec0fff  com.apple.ReplayKit (1.0 - 1) <E308B8DB-49B7-3ACC-B8F3-F2338036684D> /System/Library/Frameworks/ReplayKit.framework/Versions/A/ReplayKit
    0x7fff53ec1000 -     0x7fff53ee4fff  com.apple.StoreKit (1.0 - 1) <3477F902-E8FD-3DE8-AA0A-A92E9E1FA6AF> /System/Library/Frameworks/StoreKit.framework/Versions/A/StoreKit
    0x7fff53ee5000 -     0x7fff53ee8fff  com.apple.StoreKitUIMac (1.0 - 1) <3E669054-A227-38E0-AE0A-1C73D0175F11> /System/Library/PrivateFrameworks/StoreKitUIMac.framework/Versions/A/StoreKitUIMac
    0x7fff554b7000 -     0x7fff554bafff  com.apple.ForceFeedback (1.0.6 - 1.0.6) <63184EF1-A02C-3D64-A797-15190247C807> /System/Library/Frameworks/ForceFeedback.framework/Versions/A/ForceFeedback
    0x7fff6b9fe000 -     0x7fff6ba04fff  libCoreFSCache.dylib (200.11) <3C96E791-3964-32EA-A84A-00DF3455B43D> /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libCoreFSCache.dylib
    0x7fff6ba05000 -     0x7fff6ba09fff  libCoreVMClient.dylib (200.11) <966F49F6-D2D5-3ACB-9CFD-9F8D3C8C82F9> /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libCoreVMClient.dylib
    0x7fff6ba0a000 -     0x7fff6ba19fff  com.apple.opengl (18.5.9 - 18.5.9) <5C26B170-E22B-3AAD-BA33-61304FFA70B2> /System/Library/Frameworks/OpenGL.framework/Versions/A/OpenGL
    0x7fff6ba1a000 -     0x7fff6ba1cfff  libCVMSPluginSupport.dylib (18.5.9) <435F258D-95B5-3015-BDAC-4B8EF8E89F1E> /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libCVMSPluginSupport.dylib
    0x7fff6ba1d000 -     0x7fff6ba25fff  libGFXShared.dylib (18.5.9) <851E0956-A16E-3F5D-B3BE-37B56C2BAA04> /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libGFXShared.dylib
    0x7fff6ba26000 -     0x7fff6ba59fff  libGLImage.dylib (18.5.9) <687EBB15-1AB3-3815-A69D-58527655A92D> /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libGLImage.dylib
    0x7fff6ba5a000 -     0x7fff6ba96fff  libGLU.dylib (18.5.9) <29B7802C-F6E4-3DF1-B5D6-07B29C6D02B2> /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libGLU.dylib
    0x7fff6bc2b000 -     0x7fff6bc35fff  libGL.dylib (18.5.9) <8A4ED04C-9171-3CE2-A52A-E7C4D76A6EDA> /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libGL.dylib
    0x7fff6d075000 -     0x7fff6d0cdfff  com.apple.opencl (4.6 - 4.6) <713206B3-A335-3AC5-B342-4CE16BDF69F4> /System/Library/Frameworks/OpenCL.framework/Versions/A/OpenCL
    0x7fff6e17f000 -     0x7fff6e266fff  com.apple.audio.AVFAudio (1.0 - 477.88) <5FBB7121-7190-317C-8796-4A64EBEE1629> /System/Library/Frameworks/AVFAudio.framework/Versions/A/AVFAudio
    0x7fff6f7e8000 -     0x7fff6f7fafff  com.apple.CMImaging (1.0 - 82.6) <91AA282D-81A1-34C3-AFF4-887ABA89CCAA> /System/Library/PrivateFrameworks/CMImaging.framework/Versions/A/CMImaging
    0x7fff73af8000 -     0x7fff73b03fff  com.apple.SymptomAnalytics (1.0 - 1431.140.1) <0818E06C-B5D7-3AF4-AECD-D29EBD8CD508> /System/Library/PrivateFrameworks/Symptoms.framework/Frameworks/SymptomAnalytics.framework/Versions/A/SymptomAnalytics
    0x7fff73d19000 -     0x7fff73d31fff  com.apple.SymptomPresentationFeed (1.0 - 1431.140.1) <39660362-929E-3A0A-A7D0-80C4F437711B> /System/Library/PrivateFrameworks/Symptoms.framework/Frameworks/SymptomPresentationFeed.framework/Versions/A/SymptomPresentationFeed
    0x7fff778a9000 -     0x7fff778b0fff  libRosetta.dylib (203.58) <F72C2D50-7279-3497-8A59-56908F9661F3> /usr/lib/libRosetta.dylib

External Modification Summary:
  Calls made by other processes targeting this process:
    task_for_pid: 0
    thread_create: 0
    thread_set_state: 0
  Calls made by this process:
    task_for_pid: 0
    thread_create: 0
    thread_set_state: 0
  Calls made by all processes on this machine:
    task_for_pid: 0
    thread_create: 0
    thread_set_state: 0

VM Region Summary:
ReadOnly portion of Libraries: Total=926.0M resident=0K(0%) swapped_out_or_unallocated=926.0M(100%)
Writable regions: Total=370.4M written=0K(0%) resident=0K(0%) swapped_out=0K(0%) unallocated=370.4M(100%)
 
                                VIRTUAL   REGION 
REGION TYPE                        SIZE    COUNT (non-coalesced) 
===========                     =======  ======= 
Activity Tracing                   256K        1 
CG image                             4K        1 
CoreGraphics                        12K        2 
CoreUI image data                   68K        1 
Dispatch continuations            64.0M        1 
Foundation                          36K        2 
IOKit                             7940K        1 
Kernel Alloc Once                    8K        1 
MALLOC                            97.7M       59 
MALLOC guard page                   32K        8 
Mach message                        24K        3 
Memory Tag 255                   144.9M       92 
STACK GUARD                       56.1M       31 
Stack                            187.3M       31 
VM_ALLOCATE                        400K       10 
__DATA                            26.3M      426 
__DATA_CONST                      21.4M      256 
__DATA_DIRTY                      1258K      171 
__FONT_DATA                          4K        1 
__LINKEDIT                       503.2M       11 
__OBJC_RO                         70.3M        1 
__OBJC_RW                         2496K        2 
__TEXT                           422.8M      427 
__UNICODE                          588K        1 
mapped file                       92.3M       27 
shared memory                      756K       15 
===========                     =======  ======= 
TOTAL                              1.7G     1582 

Model: MacBookPro16,2, BootROM 1554.140.20.0.0 (iBridge: 18.16.14759.0.1,0), 4 processors, Quad-Core Intel Core i5, 2 GHz, 16 GB, SMC 
Graphics: kHW_IntelIrisPlusGraphicsItem, Intel Iris Plus Graphics, spdisplays_builtin
Memory Module: BANK 0/ChannelA-DIMM0, 8 GB, LPDDR4X, 3733 MHz, Samsung, -
Memory Module: BANK 2/ChannelB-DIMM0, 8 GB, LPDDR4X, 3733 MHz, Samsung, -
AirPort: spairport_wireless_card_type_airport_extreme (0x14E4, 0x7BF), wl0: Aug 10 2021 20:10:47 version 9.30.444.18.32.5.71 FWID 01-30b2601e
Bluetooth: Version 8.0.5d7, 3 services, 25 devices, 1 incoming serial ports
Network Service: Wi-Fi, AirPort, en0
USB Device: USB 3.1 Bus
USB Device: USB2.0 Hub
USB Device: FIDO Dongle
USB Device: USB-C Digital AV Multiport Adapter
USB Device: USB 3.1 Bus
USB Device: USB3.1 Hub
USB Device: Apple T2 Bus
USB Device: Touch Bar Backlight
USB Device: Touch Bar Display
USB Device: Apple Internal Keyboard / Trackpad
USB Device: Headset
USB Device: Ambient Light Sensor
USB Device: FaceTime HD Camera (Built-in)
USB Device: Apple T2 Controller
Thunderbolt Bus: MacBook Pro, Apple Inc., 85.0
Thunderbolt Bus: MacBook Pro, Apple Inc., 85.0
