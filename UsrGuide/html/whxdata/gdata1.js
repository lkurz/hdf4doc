gXMLBuffer ="<?xml version=\"1.0\" encoding=\"utf-8\" ?><data>   <entry name=\"8-bit raster image\\    a bit-mapped image whose rows are painted from left to right using pixel\" value=\"The data model for the 8-bit raster image&#160;set, or RIS8, an acronym for &quot;Raster Image Set, 8-bit&quot;, supports three types of objects; two-dimensional 8-bit raster images, dimensions and palettes. The latter two items occur once per RIS8. The following figure shows the contents of an 8-bit raster image set.\" />   <entry name=\"annotation model\\a predefined data structure used to attach text strings to any HDF file or data\" value=\"The HDF annotation interface, the AN interface, supports the storage of labels and descriptions to HDF files and the data objects they contain. This chapter explains the methods used to read and write file and data object annotations using the AN interface.\" />   <entry name=\"annotation\\    a label or description specifically added to an HDF file to identify or describe a\" value=\"When working with different data types, it is often convenient to identify the contents of a file by adding a short text description or annotation. An annotation serves as the explanation for a file or data object, as in &quot;COLLECTED 12/14/90&quot; or &quot;BLACK HOLE SIMULATION&quot;. The annotation can be as short as a name or as long as a portion of source code. For example, if the data originated as satel­lite data, the annotation might include the source of the data, pertinent environmental conditions, or other relevant information. In the case of a hypothetical black hole simulation, the annotation might contain source code for the program that produced the data.\" />   <entry name=\"application interface\\    a collection of functions for reading, writing, and organizing the data\" value=\"The HDF&#160;application programming interfaces, or APIs, include several independent sets of rou­tines, with each set specifically designed to simplify the process of storing and accessing one type of data. These interfaces are represented in Figure 1b&#160;as the second layer from the top. Although each interface requires programming, all the low-level details can be ignored. In most cases, all one must do is make the correct function call at the correct time, and the interface will take care of the rest. Most HDF interface routines are available in both FORTRAN-77 and C. A complete list of the high-level interfaces is provided in Section 1.4, &quot;High-Level HDF APIs&quot;.\" />   <entry name=\"color component\\    one of three 8-bit values that determine the amount of red, green, or blue used\" value=\"For each of the 256 colors in a palette, there are three 8-bit numbers describing its appearance. (See Figure 9a)&#160;Each 8-bit color component&#160;represents the amount of red (or &quot;R&quot;), green (or &quot;G&quot;), or blue (or &quot;B&quot;) used to create a particular color. In HDF, 8-bit palettes are assumed to be orga­nized as follows; each entry consists of three bytes: one each for R, G, and B value. The first group of three bytes represent the R, G, and B values of the first color in the palette; the next three the R, G, and B values of the second color; and so forth. Therefore, the 256 possible different pixel val­ues in an image serve as an index for the 256 color entries stored in the palette.\" />   <entry name=\"DFR8\\    the interface prefix for the functions in the 8-bit raster interface.\" value=\"All C routines in the SD interface begin with the prefix &quot;SD&quot;. The equivalent FORTRAN-77 rou­tines use the prefix &quot;sf&quot;. These routines are categorized as follows:\" />   <entry name=\"low level interface\\    a collection of  HDF function calls that perform basic file I/O, error\" value=\"The basic interface layer, or the low-level API, is reserved for software developers. It was designed for direct file I/O of data streams, error handling, memory management, and physical storage. It is a software toolkit for experienced HDF programmers who wish to make HDF do something more than what is currently available through the higher-level interfaces. Low-level routines are available only in C.\" />   <entry name=\"SD scientific data set data model: description\" value=\"The Scientific Data Set Data Model\" />  </data>";