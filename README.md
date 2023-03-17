# nodetestap
Node test app example for Azure WebApp container

### Azure WebApp Container Configuration:
<img width="1379" alt="image" src="https://user-images.githubusercontent.com/2939085/225992089-4ac0e18a-931e-4494-9d6c-f16ee1eb905b.png">

### Lessons learnt:

Keep the target container platform architecture in mind.

Ran into the following issue while starting the app in Azure:

  023-03-17T16:46:12.529Z INFO  - Logging is not enabled for this container.
  
  Please use https://aka.ms/linux-diagnostics to enable logging to see container logs here.
  
  2023-03-17T16:46:17.476Z INFO  - Initiating warmup request to container nodetestapplication_0_c512d72c for site nodetestapplication
  
  2023-03-17T16:46:17.736Z ERROR - Container nodetestapplication_0_c512d72c for site nodetestapplication has exited, failing site start
  
  2023-03-17T16:46:17.799Z ERROR - Container nodetestapplication_0_c512d72c didn't respond to HTTP pings on port: 3000, failing site start. See container logs for debugging.
  
  2023-03-17T16:46:17.863Z INFO  - Stopping site nodetestapplication because it failed during startup.
  
 Resolution:
 
 Build for the target platform as follows:
 
 docker buildx build --platform linux/amd64 --rm . -t rudhin28/nodetestap:arch64
