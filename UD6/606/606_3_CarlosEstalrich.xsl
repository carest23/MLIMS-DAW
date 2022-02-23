<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

    <xsl:template match="museums">
        <cities>
        <xsl:apply-templates />
        </cities>
    </xsl:template>

    <xsl:template match="museum">
        <xsl:text>&#10;</xsl:text>

            <city>
                <xsl:attribute name="name">
                    <xsl:value-of select="@city" />
                </xsl:attribute>
            
            <xsl:text>&#10;</xsl:text>
            <country>
                <xsl:value-of select="@country" />
            </country>
            <xsl:text>&#10;</xsl:text>
            <museum>
                <xsl:value-of select="@name" />
            </museum>
            <xsl:text>&#10;</xsl:text>
        </city><xsl:text>&#10;</xsl:text>
</xsl:template>
</xsl:stylesheet>
<!-- Exercise 3 -->

<!-- <?xml version="1.0" encoding="UTF-8"?>
<museums>
  <museum name="Museo del Prado" city="Madrid" country="Spain"/>
  <museum name="British Museum" city="London" country="United Kingdom"/>
  <museum name="National Gallery" city="London" country="United Kingdom"/>
</museums>
-->